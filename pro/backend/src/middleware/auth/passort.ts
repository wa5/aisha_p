const GoogleStrategy = require("passport-google-oauth20").Strategy;
const AppleStrategy = require("passport-apple").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "your id";
const GOOGLE_CLIENT_SECRET = "your id";

const GITHUB_CLIENT_ID = "your id";
const GITHUB_CLIENT_SECRET = "your id";

const  FACEBOOK_APP_ID = "361425326200431";
const FACEBOOK_APP_SECRET = "a9d88adca7a1b721995af5aef510e522";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken:any, refreshToken:any, profile:any, done:any) {
      console.log(profile)
      done(null, profile);
    }
  )
);

passport.use(
  new AppleStrategy (
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken:any, refreshToken:any, profile:any, done:any) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken:any, refreshToken:any, profile:any, done:any) {
      console.log(profile)
      done(null, profile);
    }
  )
);

passport.serializeUser((user:any, done:any) => {
  done(null, user);
});

passport.deserializeUser((user:any, done:any) => {
  done(null, user);
});
