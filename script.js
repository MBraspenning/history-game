var gameController = (function() {
    
    var Question = function(id, question, answers, correct, questionResult, trivia){
        this.id = id;
        this.question = question;
        this.answers = answers;
        this.correct = correct;
        this.questionResult = questionResult;
        this.trivia = trivia;
    }
    
    var question1 = new Question(
        1, 
        'Rome was one of the largest empires the world has ever seen. But can you name the first official emperor of Rome?',
        {
            a: 'Julius Caesar',
            b: 'Mark Anthony',
            c: 'Caligula',
            d: 'Augustus'
        },
        4,
        '',
        'The Roman empire is the longest-lasting empire in history. It spanned several eras, but essentially lasted from 27 BC to 1453 AD. A grand total of 1,480 years.'
    )
    
    var question2 = new Question(
        2,
        'The Battle of Hastings was won by William the Conqueror and started the Norman conquest of England. But in what year did the battle take place?',
        {
            a: '1302',
            b: '1066',
            c: '814',
            d: '1099'
        },
        2,
        '',
        'The Battle of Hastings took place 11 km north of Hastings at the present-day town of Battle which got it\'s name from this historical event.'
    )
    
    var question3 = new Question(
        3,
        'In 1865, following the American Civil War, president Abraham Lincoln was shot and killed by a Southern sympathizer. Do you know the name of the shooter?',
        {
            a: 'Robert E. Lee',
            b: 'Andrew Johnson',
            c: 'John Wilkes Booth',
            d: 'Joseph E. Johnston'
        },
        3,
        '',
        'Many surveys and polls conducted in the last 100 years voted Abraham Lincoln as the most popular president in American history.'
    )
    
    var question4 = new Question(
        4,
        'The Aztec Empire was conquered by the Spanish Conquistadors in the 16th century. Can you name the man who led the expedition which caused the fall of the Aztec Empire?',
        {
            a: 'Christopher Columbus',
            b: 'Diego Velazquez',
            c: 'Hernan Cortes',
            d: 'Don Diego de la Vega'
        },
        3,
        '',
        'The Aztec capital Tenochtitlan was destroyed during the conquest of the Aztec Empire. The Spanish conquerors renamed it Mexico City which now is the capital city of Mexico.'
    )
    
    var question5 = new Question(
        5,
        'During the final stages of WWII, the U.S. dropped two atomic bombs on the Japanese cities Hiroshima and Nagasaki. What was the name of the first plane in history to drop an atomic bomb?',
        {
            a: 'Manhattan',
            b: 'Enola Gay',
            c: 'Spitfire',
            d: 'SBD Dauntless'    
        },
        2,
        '',
        'Japan\'s refusal to accept the Allies\' demands for unconditional surrender led to the bombing of Hiroshima and Nagasaki. Six days after the second bomb dropped, Japan finally surrendered and World War II came to an end.'
    )
    
    var question6 = new Question(
        6,
        'Today, Trafalgar Square is a lasting reminder of the British naval victory of the Battle of Trafalgar in the Napoleonic Wars. Do you know who commanded the British naval forces during the battle?',
        {
            a: 'Francis Drake',
            b: 'Robert Maynard',
            c: 'Horatio Nelson',
            d: 'Edward Smith'
        },
        3,
        '',
        'The HMS Victory, the flagship of the British commander at the Battle of Trafalgar, still serves as the flagship of the First Sea Lord and is the oldest naval ship still in commission.'
    )
    
    var question7 = new Question(
        7,
        'The Vikings raided England on multiple occasions and played a big role in the history of Britain. But do you know the name of the place where the Vikings first landed in Britain?',
        {
            a: 'Lindisfarne',
            b: 'York',
            c: 'Isle of Sheppey',
            d: 'Dommoc'
        },
        1,
        '',
        'The word "viking" is derived from the Old English word "wicing" which translates as pirate, a fitting term for a seafaring people known best for their violent raids.'
    )
    
    var question8 = new Question(
        8,
        'The outbreak of World War I can be traced back to the assassination of Archduke Franz Ferdinand of Austria. But what was the name of the assassin?',
        {
            a: 'Gavrilo Princip',
            b: 'Oskar Potiorek',
            c: 'Dragutin Dimitrijević',
            d: 'Vlade Divac'
        },
        1,
        '',
        'The Scottish rock band Franz Ferdinand choose their name after seeing a racehorse named Archduke Ferdinand win the Northumberland Plate in 2001.'
    )
    
    var question9 = new Question(
        9,
        'In the 17th and 18th century pirates terrorised the worlds oceans and seas. They are associated with the iconic black flag with skull and crossbones. But what is traditional English name for this flag?',
        {
            a: 'Black John',
            b: 'Smiling Sam',
            c: 'Jolly Roger',
            d: 'Union Jack'
        },
        3,
        '',
        'Pirates would normally fly false colors or no colors at all until they had their prey within firing range. At that point they would raise their own flag, often simultaneously with a warning shot.'
    )
    
    var question10 = new Question(
        10,
        'On the 15th of April 1912 the RMS Titanic sank after it collided with an iceberg during its maiden voyage from Southampton to New York. Do you know the name of the ship\'s captain?',
        {
            a: 'William Thomas Turner',
            b: 'Arthur Rostron',
            c: 'Robert Fitzroy',
            d: 'Edward Smith'  
        },
        4,
        '',
        'The RMS Titanic was one of three Olympic-class ocean liners built for the White Star Line in the early 20th century. The other two being the RMS Olympic and the RMS Britannic.'
    )
    
    var question11 = new Question(
        11,
        'In 1969, the Lunar Module Apollo 11 landed on the moon. Neil Armstrong was the first man to walk on the moon, but who was the second man to set foot on the moon\'s surface?',
        {
            a: 'Jim Lovell',
            b: 'Buzz Aldrin',
            c: 'Yuri Gagarin',
            d: 'James Irwin'
        },
        2,
        '',
        'The second man on the moon was tasked with taking a series of panoramic photos while on the moon, so many of the famous photos we know today were taken by this man.'
    )
    
    var question12 = new Question(
        12,
        'The expression "cogito ergo sum", meaning "I think, therefore I am" is one we all know, but who wrote this philosophical proposition?',
        {
            a: 'Voltaire',
            b: 'Plato',
            c: 'René Déscartes',
            d: 'Aristotle'
        },
        3,
        '',
        'The underlying meaning of the phrase is that the very act of doubting one\'s own existence serves as proof of the reality of one\'s own mind.'
    )
    
    var question13 = new Question(
        13,
        'At the Battle of Waterloo Napoleon Bonaparte was defeated by two armies of the Seventh Coalition. One of the victorious armies was led by a British commander, what was his name?',
        {
            a: 'Arthur Wellesley',
            b: 'William II',
            c: 'Bernard Montgomery',
            d: 'Arthur Percival'
        },
        1,
        '',
        'Tourism at the battleground started the day after the battle. The iconic monument we can see today was ordered by King William I of the Netherlands in 1820.'
    )
    
    var question14 = new Question(
        14,
        'In the year 313 AD the Western Roman Emperor Constantine I issued an edict which gave Christians a legal status throughout the empire. What was the place where it was issued?',
        {
            a: 'Rome',
            b: 'Constantinople',
            c: 'Milan',
            d: 'Florence'
        },
        3,
        '',
        'Christianity became the official religion of the Roman Empire in the year 380 AD under emperor Theodosius I.'
    )
    var question15 = new Question(
        15,
        'By the turn of the 19th century Russia was one of the most powerfull empires in the world. This came to an end in 1917 when the last tsar was forced to abdicate. What was his name?',
        {
            a: 'Vladimir Lenin',
            b: 'Nicholas Romanov',
            c: 'Ivan Vasilyevich',
            d: 'Peter the Great'
        },
        2,
        '',
        'Russia\'s war with Germany in WWI caused 3,300,000 Russian deaths. This in combination with incompetent management of the war effort and lack of food led to the fall of the last tsar of Russia.'
    )
    
    var question16 = new Question(
        16,
        'The national holiday of France is the 14th of July and remembers a particular event which happened in 1789 that started the French Revolution. What was that event?',
        {
            a: 'Execution of Louis XVI',
            b: 'Napoleon became emperor',
            c: 'Storming of the Bastille',
            d: 'Financial Crisis'
        },
        3,
        '',
        'The French royal family tried to escape the country but were caught at the border. Even though people had no pictures of the royal family, they were recognized because of coins which showed the king\'s face.'
    )
    
    var question17 = new Question(
        17,
        'The year 1961 saw the construction of the Berlin Wall, dividing the German capital in two parts. But do you know when the wall came down, thus reuniting Berlin and Germany.',
        {
            a: '1989',
            b: '1992',
            c: '1985',
            d: '1969'
        },
        1,
        '',
        'The Berlin Wall was constructed as a way of preventing East Germans from entering West Germany. It was not so much a boundary for West Germans wanting to enter the East, who were able to do so by obtaining a permit.'
    )
    
    var question18 = new Question(
        18,
        'In 1095 Pope Urban II held a sermon in Clermont. This led to a major event in human history. Do you know which one?',
        {
            a: 'The Hundred Years\' War',
            b: 'The First Crusade',
            c: 'The Great Schism',
            d: 'The Rise of Protestantism'
        },
        2,
        '',
        'Pope Urban II laid the foundations for the papal monarchy, and his pontificate marked a turning point in the institutional organization of the papacy and in papal-imperial relations.'    
    )
    
    var question19 = new Question(
        19,
        'In the 2nd century the Romans wanted to protect their borders in Britain by constructing a giant wall. Can you name the Emperor whose name is still attached to this wall?',
        {
            a: 'Hadrian',
            b: 'Trajan',
            c: 'Marcus Aurelius',
            d: 'Tiberius'
        },
        1,
        '',
        'George R. R. Martin has acknowledged that this wall was the inspiration for The Wall in his best-selling series A Song of Ice and Fire, dramatised in the TV series Game of Thrones.'
    )
    
    var question20 = new Question(
        20,
        '1986 witnessed a devastating disaster in space travel. The space shuttle disintegrated 73 seconds into it\'s flight, killing all 7 crew members. What was the name of that space shuttle?',
        {
            a: 'Columbia',
            b: 'Discovery',
            c: 'Challenger',
            d: 'Atlantis'
        },
        3,
        '',
        'Christa McAuliffe was selected from more than 11,000 applicants to participate in the NASA Teacher in Space Project and was scheduled to become the first teacher in space. Unfortunately she died together with the other crew members.'
    )
    
    var questionsArray = [
        question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20
    ];
    var score = 0;
    
    return {
        questions: function(){
            return questionsArray;
        },
        
        checkAnswer: function(obj, ID){
            
            if(ID === obj.correct){
                obj.questionResult = 'correct';                
            } else {
                obj.questionResult = 'wrong';
            }
            
        },
        
        keepScore: function(result){
            
            if(result === 'correct'){
                score++;
            } 
            
        },
        
        resetScore: function(){
            score = 0;
        },
        
        getScore: function(){
            return score;
        },
        
        test: function(){
            console.log(questionsArray);
        }
    }
    
// ========================================================        
// ========================================================    
// ========================================================        
    
})();

var UIController = (function() {
    
    var DOMstrings = {
        questionNumber: '.questionNumber',
        questionContent: '.questionContent',
        answer1: '.ans1',
        answer2: '.ans2',
        answer3: '.ans3',
        answer4: '.ans4',
        wrapper: '.wrapper',
        answerContainer: '.answers',
        nextQuestion: '#nextQuestion-btn',
        prevQuestion: '#prevQuestion-btn',
        userMessage: '#user-message',
        scoreDisplay: '#scoreDisplay',
        didYouKnowText: '#did-you-know--text',
        didYouKnowImg: '#did-you-know',
        finish: '#finish-btn',
        restart: '#restart-btn'
    }
    
    return {
        
        getDOMstrings: function(){
            return DOMstrings;
        },
        
        displayQuestion: function(obj, arr){
        
            var htmlQ, htmlA, newHtmlQ, newHtmlA;
            
            htmlQ = '<div class="question"><h2>Question <span class="questionNumber">%id%</span> / %totalQuestions% :</h2><p class="questionContent">%content%</p></div>'
            
            htmlA = '<ul><li id="1" class="ans1">%ans1%</li><li id="2" class="ans2">%ans2%</li><br><li id="3" class="ans3">%ans3%</li><li id="4" class="ans4">%ans4%</li></ul>'
            
            newHtmlQ = htmlQ.replace('%id%', obj.id);
            newHtmlQ = newHtmlQ.replace('%content%', obj.question);
            newHtmlQ = newHtmlQ.replace('%totalQuestions%', arr.length);
            
            newHtmlA = htmlA.replace('%ans1%', obj.answers.a);
            newHtmlA = newHtmlA.replace('%ans2%', obj.answers.b);
            newHtmlA = newHtmlA.replace('%ans3%', obj.answers.c);
            newHtmlA = newHtmlA.replace('%ans4%', obj.answers.d);
            
            document.querySelector(DOMstrings.wrapper).innerHTML =  newHtmlQ;
            document.querySelector(DOMstrings.answerContainer).innerHTML = newHtmlA;   
            
        },
        
        showResult: function(result, obj, ID){
            
            if(result === 'correct'){
                document.querySelector('.ans'+ID).style.backgroundColor = '#00A28B';    
            } else {
                document.querySelector('.ans'+ID).style.backgroundColor = '#DC143C';
                document.querySelector('.ans'+obj.correct).style.backgroundColor = '#00A28B';
            }
            
        },
        
        showDidYouKnow: function(obj){
            document.querySelector(DOMstrings.didYouKnowText).textContent = obj.trivia;
        },
        /*
        emptyDidYouKnow: function(){
            document.querySelector(DOMstrings.didYouKnowText).textContent = '';  
        },
        */
        userMessage: function(){
            document.querySelector(DOMstrings.userMessage).textContent = 'Please pick your answer before you continue';
        },
        
        emptyUserMessage: function(){
            document.querySelector(DOMstrings.userMessage).textContent = '';
        },
        
        showScore: function(score, arr){
            document.querySelector(DOMstrings.scoreDisplay).textContent = score + ' / ' + arr.length;
        },
        
        showFinishBtn: function(){
            document.querySelector(DOMstrings.nextQuestion).style.display = 'none';
            document.querySelector(DOMstrings.finish).style.display = 'inline';
        },
        
        showFinishPage: function(s){
            var finishContent, newFinishContent;
            
            finishContent = '<div class="question"><h2>%header%</h2><p class="questionContent">%text%</p></div>'
            
            if(s >= 15){
                newFinishContent = finishContent.replace('%header%', 'You came, you saw, you conquered!');  
                newFinishContent = newFinishContent.replace('%text%', 'You conquered the game just like Julius Caesar conquered Gaul, ave!');  
            } else if (s >= 10 && s < 15){
                newFinishContent = finishContent.replace('%header%', 'Good job!');  
                newFinishContent = newFinishContent.replace('%text%', 'You are well on your way to become the next Cicero, remember his famous saying: to be ignorant of the past is to always remain a child.'); 
            } else {
                newFinishContent = finishContent.replace('%header%', 'Keep at it!');  
                newFinishContent = newFinishContent.replace('%text%', 'There is some room for improvement, but you know what they say: "Rome wasn\'t built in a day".'); 
            }
               
            document.querySelector(DOMstrings.restart).style.display = 'block';
            document.querySelector(DOMstrings.finish).style.display = 'none';
            document.querySelector(DOMstrings.wrapper).innerHTML = newFinishContent;
            document.querySelector(DOMstrings.answerContainer).innerHTML = '';
            document.querySelector(DOMstrings.didYouKnowText).textContent = '"Those who do not remember the past are condemned to repeat it."  - George Santayana';
            
        }
        
    }
    
})();

// ========================================================    
// ========================================================    
// ========================================================    

var controller = (function(gameCtrl, UICtrl) {
    
    var questionsArray = gameCtrl.questions();
    var questionNumber = 0;
    var initScore = 0;
    var score = gameCtrl.getScore();
    
    var setupEventListeners = function(){
        
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.answerContainer).addEventListener('click', checkAnswer);
            
        document.querySelector(DOM.nextQuestion).addEventListener('click', function(){
            nextQuestion();
            if(questionsArray[questionsArray.length -2].questionResult !== ''){
                finish();
            }
            console.log('next question button');
        });

        document.querySelector(DOM.finish).addEventListener('click', function(){
                finishPage();
        });
        
        document.querySelector(DOM.restart).addEventListener('click', function(){
                questionNumber = 0;

                document.querySelector(DOM.restart).style.display = 'none';
                document.querySelector(DOM.finish).style.display = 'none';
                document.querySelector(DOM.nextQuestion).style.display = 'inline';
                gameCtrl.resetScore();
                UICtrl.displayQuestion(questionsArray[0], questionsArray);
                UICtrl.showDidYouKnow(questionsArray[0]);
                UICtrl.showScore(initScore, questionsArray);

                for(var i = 0; i < questionsArray.length; i++){
                    console.log('reset for loop');
                    questionsArray[i].questionResult = '';
                }
        });
    }
   
    var showNewQuestion = function(){
        
        UICtrl.displayQuestion(questionsArray[questionNumber], questionsArray);
        // Show extra info
        UICtrl.showDidYouKnow(questionsArray[questionNumber]);
            
    } 
    
    var checkAnswer = function(event){
        
        var questionID = parseInt(event.target.id);
        if(questionsArray[questionNumber].questionResult === ''){
            
            // Answer handling
            gameCtrl.checkAnswer(questionsArray[questionNumber], questionID);

            UICtrl.showResult(questionsArray[questionNumber].questionResult, questionsArray[questionNumber], questionID);
            
            // Score handling
            gameCtrl.keepScore(questionsArray[questionNumber].questionResult);
            score = gameCtrl.getScore();

            UICtrl.showScore(score, questionsArray);
            
        }
        
    }
    
    var nextQuestion = function(){     
        if(questionsArray[questionNumber].questionResult === ''){
            UICtrl.userMessage();
        }
        
        if(questionNumber < questionsArray.length - 1 && questionsArray[questionNumber].questionResult !== ''){
            questionNumber += 1;
            showNewQuestion(); 
            UICtrl.emptyUserMessage();
        }

        console.log(questionsArray[questionNumber]);
        console.log(questionsArray[questionNumber].questionResult);
        
    }
    
    var prevQuestion = function(){     
        
        if(questionNumber > 0){
            questionNumber -= 1;
            showNewQuestion();
        }    
        
    }
    
    var finish = function(){
        UICtrl.showFinishBtn();    
    }
    
    var finishPage = function(){
        if(questionsArray[questionNumber].questionResult === ''){
            UICtrl.userMessage();
        } else {
            console.log('finishPage function');
            UICtrl.showFinishPage(score);
            UICtrl.emptyUserMessage();
        }
        
        console.log(questionsArray[questionNumber].questionResult);

    }
    
    return {
        
        init: function(){
            UICtrl.displayQuestion(questionsArray[0], questionsArray);
            UICtrl.showDidYouKnow(questionsArray[0]);
            UICtrl.showScore(initScore, questionsArray);
            setupEventListeners();
        }
        
    }
        
})(gameController, UIController);

controller.init();