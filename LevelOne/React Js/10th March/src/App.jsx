import './App.css';

const ReverseArray = () => {
  const originalArray = [1, 2, 3, 4, 5];

  const reverse = () => {
    let reverseNumber = originalArray.reverse();
    return reverseNumber.join(',');
  };

  return (
    <div>
      <h2>Reverse Array </h2>
      <p>Reversed Array: {reverse()}</p>
    </div>
  );
};

const CalculateBMI = (weight, height) => {
  weight = 70;
  height = 1.75;
  const BMICalculation = () => {
    let total = (weight / (height * height)).toFixed(2);
    return total;
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <p>BMI: {BMICalculation()}</p>
    </div>
  );
};

const GenerateQuote = () => {
  const quotes = [
    'The only to do great work is to love what you do. -Steve Jobs',
    'Innovation distinguishes between leader and a follower. -Steve Jobs',
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    'Stay Hungry, stay foolish. -Steve Jobs',
    'The greatest glory in living lies not in never falling, but in rising every time we fall.-Nelson Mandela',
  ];

  const randomQuotes = () => {
    let checkQuotes = Math.floor(Math.random() * quotes.length);
    return quotes[checkQuotes];
  };

  return (
    <div>
      <h2>Random Quote</h2>
      <p>{randomQuotes()}</p>
    </div>
  );
};

const GradeAnalyser = ({ score }) => {
  const checkScore = (score) => {
    let grade;
    let comment;
    if (score >= 90 && score <= 100) {
      grade = 'A';
      comment = 'Excellent Work!';
    } else if (score > 80) {
      grade = 'B';
      comment = 'Good Job!';
    } else if (score > 70) {
      grade = 'C';
      comment = 'Not bad, Keep it Up!';
    } else if (score > 60) {
      grade = 'D';
      comment = 'You passed, but aim higher next time';
    } else {
      grade = 'F';
      comment = "Sorry, you didn't pass. Keep working hard!";
    }
    return { grade, comment };
  };

  const { grade, comment } = checkScore(score);
  return (
    <div>
      <h2>Grade Analyzer</h2>
      <p>Score: {score}</p>
      <p>Grade: {grade}</p>
      <p>{comment}</p>
    </div>
  );
};


const TemperatureFeedback = ({currentTemp}) =>{

    const temperature = (tem) =>{

      if(tem < 0) return "Brr,it's freezing!"
      if(tem < 10) return "It's quite cold, bundle up!"
      if(tem > 10 && tem <20) return "The weather is cool and comfortable"
      if(tem > 20 && tem < 30) return "It's a warm day!"
      if(tem > 30) return "It's hot outside, stay cool!"

    }

    return(
      <div>
          <h2>Temperature Feedback </h2>
          <p>Current Temperature: {currentTemp} degree celsius</p>
          <p>{temperature(25)}</p>

      </div>
    )

      
}

export default function App() {
  return (
    <>
      <ReverseArray />
      <GenerateQuote />
      <CalculateBMI />
      <GradeAnalyser score={85} />
      <TemperatureFeedback currentTemp = {25}/>
    </>
  );
}
