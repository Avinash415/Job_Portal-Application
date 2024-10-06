import cron from "node-cron";
import { Job } from "../models/JobSchema.js";
import { User } from "../models/user.Model.js";
import { sendEmail } from "../utils/sendEmail.js";

/**
 * newsLetterCron - A cron job function that schedules an email notification to users
 * about newly available job postings in their respective niches.
 */
export const newsLetterCron = () => {
    // Schedule the cron job to run at the start of every month
    cron.schedule("* * * */1 *", async () => {
      console.log("Running Cron Automation");
      
      // Fetch all job postings where the newsletter has not been sent yet
      const jobs = await Job.find({ newsLettersSent: false });
      
      // Loop through each job that needs a newsletter sent
      for (const job of jobs) {
        try {
          // Find users whose interests match the job niche (1st, 2nd, or 3rd niche)
          const filteredUsers = await User.find({
            $or: [
              { "niches.firstNiche": job.jobNiche },
              { "niches.secondNiche": job.jobNiche },
              { "niches.thirdNiche": job.jobNiche },
            ],
          });

          // Loop through each filtered user and send the email notification
          for (const user of filteredUsers) {
            const subject = `Hot Job Alert: ${job.title} in ${job.jobNiche} Available Now`;
            const message = `Hi ${user.name},\n\nGreat news! A new job that fits your niche has just been posted. The position is for a ${job.title} with ${job.companyName}, and they are looking to hire immediately.\n\nJob Details:\n- **Position:** ${job.title}\n- **Company:** ${job.companyName}\n- **Location:** ${job.location}\n- **Salary:** ${job.salary}\n\nDon’t wait too long! Job openings like these are filled quickly. \n\nWe’re here to support you in your job search. Best of luck!\n\nBest Regards,\nNicheNest Team`;

            // Send an email to each user who matches the job niche
            sendEmail({
              email: user.email,
              subject,
              message,
            });
          }

          // Mark the job as having its newsletter sent and save it
          job.newsLettersSent = true;
          await job.save();
        } catch (error) {
          console.log("ERROR IN NODE CRON CATCH BLOCK");
          // Log the error if something goes wrong
          return next(console.error(error || "Some error in Cron."));
        }
      }
    });
};
