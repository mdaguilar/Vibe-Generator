# Vibe-Generator
Need some vibes? We got you covered. Submission for SB Hacks VIII.

## Inspiration
For most of us, SB Hacks 8 was our first hackathon so we wanted something simple to do within the 36 hour window. We decided on a web page quiz that results in giving a Spotify playlist because we all like music. 

## What it does
Vibe Generator is a quiz that uses the median of your responses to give the user a Spotify playlist that would fit best with their responses. It is embedded into the website for previewing purposes. 

## How we built it
We built this web page on React because npm is neat as well as using expressjs and ejs. ExpressJS created the web server and ejs allows us to merge html and js easy and without hassle. Bootstrap allowed us to create a theme for the website and make it consistent across the page. Using EJS we redirect the client to the quiz page and after that, the results page if the user answered every question.

## Challenges we ran into
**What result would we give?**
We needed to figure out if we wanted to use the Spotify API to generate a new playlist or if we wanted to just embed an already made playlist to avoid using the Spotify API. For time's sake, we decided against using the Spotify API. 

**How to pass data from the frontend to the backend?**
We had issues where retrieving a value from a question would return as undefined but the issue was the elements we were using. In some cases, we accidentally used links instead of buttons (for example, the submission button, which would result in logic not being used.)

**How to use the DOM?**
Since NodeJS is a backend tool and not a browser, it does not have access to the DOM so functions like document.getElementByClassName would not work, neither would window.alert(). Since we were far along into the project already, we didn't want to rewrite the project in ReactJS and only had EJS so we did a hackish method of writing a script inside the quiz ejs to pass variables into the DOM. 

## Accomplishments that we're proud of
* Attend a Hackathon - This is the first for most of us so we were just glad to be included :) 
* Built a working website with functionality - We're happy to have done this much work in less than 24 working hours.
* Growing more confident in programming - it's always exciting to take the skills we learn in the classroom and apply it to actual projects.

## What we learned
- **Monica**: I got a chance to dive more deeply into EJS and Node.js, and take the skills I learned last semester to a new level.
- **Robin**: I learned about EJS. I'm used to using React for JS or Flask for Python so EJS was something new to me that I could possibly use in the future.
- **Nathan**: 

## What's next for Vibe Generator
The possibilities are endless, but a great place to start would be to include a bigger selection of playlists.
