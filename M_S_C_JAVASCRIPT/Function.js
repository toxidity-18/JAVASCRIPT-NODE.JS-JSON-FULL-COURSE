// DEC - 23 - 2024 
// Non-abstract code 
console.log ( "Hey that my laptop");
console.log ( 'If it ur\'s then make sure to charge it.');
console.log ( 'Sam, kindly put ur laptop away.')
// How to abtract the above code .
function convo(){
    console.log ( "Hey that my laptop");
    console.log ( 'If it ur\'s then make sure to charge it.');
    console.log ( 'Sam, kindly put ur laptop away.');
}
// function declaration

// eamle two of non abstract code then to function code 
console.log ( "This is my class");
console.log ( "Class 101 contains a total of 35 students");
console.log ( "They will all make fine coders one day");

// Abstracting the above code 
function SDF_FT13(){
    console.log ( "This is my class");
    console.log ( "Class 101 contains a total of 35 students");
    console.log ( "They will all make fine coders one day");
}
// function declaration ... 

//using string interpolation in function
function Home_chores(){
    const workerA = "Samuel"
    const workerB = "Dennis"
    const workerC = "Viona"
    console.log(`Mum assigned trash duty to ${workerA}`)
    console.log(`Supper will be prepared by ${workerC}`)
    console.log(`Cleaning will be done by ${workerB}`)
}
Home_chores()

// shortening with use of parameters
function Home_chores(workerA,workerB,workerC){
    console.log(`Mum assigned trash duty to ${workerA}`)
    console.log(`Supper will be prepared by ${workerC}`)
    console.log(`Cleaning will be done by ${workerB}`)
}
Home_chores("Samuel","Dennis","Viona")

// Returning values from a function
const month = 'March';
function goal(one,two,three){
    if ( month === 'January'){
        return  "Thank the lord for such an early score"
    };
    console.log(`Be an ${one} gain experience and grow your network`);
    console.log(`Maintain discipline as a ${two} thus increasing chances of being profitable`);
    console.log(`${three} plays a vital role in any successful business`);
};
const result = goal ('intern','trader','investing');
console.log(result);

// function continued ...
// defining a function with function declaration 
function razzle(){
    console.log("You\'ve been razzled")
};
// function being invoked 
razzle();

// invoke then declare ...
missed();
console.log(results);
// function declaration .
function missed(ngwee){
    console.log(`Yes i ${ngwee} alot`);
    const results = missed( 'I missed you alot')
};

// showing how hoisting is done .
aim();// hoisting 
function ain(one){
    console.log(`I ${one} aiming alot`);
}
const Result = ain('am');
