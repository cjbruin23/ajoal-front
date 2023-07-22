import { Typography } from "@mui/material";

import "./WelcomeBody.css";

const WelcomeBody = () => {
  return (
    <div id="welcome-body">
      <Typography variant="h6" color="secondary">
        Welcome to Periate!
      </Typography>
      <p>Here, we proved experts that can answer your programming questions.</p>
      <p>
        Tired of scouring the internet for answers to your programming related
        issues? Even when you find help, it often is not tailer made to your
        specific issue.
      </p>
      <p>Sign up to find out more, and get help now!</p>
    </div>
  );
};

export default WelcomeBody;
