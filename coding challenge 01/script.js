var heightMark, massMark, heightJohn, massJohn;
heightMark = 1.8 
massMark = 80

heightJohn = 1.6
massJohn = 75

var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark^2)
bmiJohn = massJohn / (heightJohn^2)

var markHigherBMI = bmiMark > bmiJohn



console.log(`Is Mark's BMI highter than John's BMI? ${markHigherBMI} `)
