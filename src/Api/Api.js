
function GetQASet(){
  return [    
      {type: 'radioButton', question: 'Overall, how has your working week gone?', answers:  ['Great' ,'Good', 'So so', 'Not so good','Terrible']} ,
      {type: 'radioButton', question: 'How well have you got on with the team?', answers:  ['Really well' ,'Well', 'Okay', 'Not so good','Bad']} ,
      {type: 'radioButton', question: 'Are your skills valued?', answers:  ['Skills loved' ,'Yes', 'Yes/No', 'Not really','No']} ,
      {type: 'radioButton', question: 'Are you stressed with the amount of work?', answers:  ['Really stressed' ,'Stressed', 'Sometimes', 'Not Really','Not at all']} ,
      {type: 'radioButton', question: 'Is the variety of you work intresting?', answers:  ['Plenty of varity' ,'Varied', 'Sometime', 'Not really','Not at all']} ,
      {type: 'radioButton', question: 'How would you rate your job security?', answers:  ['This job is crap' ,'Happy', 'Neither good or bad', 'Bad','Need another job']} ,
      {type: 'textArea', question: 'Anything eles you would like to add?', answers:  []} ,
     ] 
  
  }



export {GetQASet};