var data = module.exports={
  "_id": "H1t0SO2RG",
  "age": 3,
  "uid": "H1t0SO2RG",
  "long": "<b>Subjective:</b><br/>Rau is a 3 years old <br/><br/><b>Medications</b>: <br/>- coumadin 3 MG 2/day <br/><br/><b>Social History:</b><br/>Does not drink. <br/><br/><b>Objective:</b><br/>General: Well-appearing, no acute distress. AAOx3.<br/>HEENT: Oropharynx normal, TMs normal. No lymphadenopathy. <br/>Pulmonary: Clear to auscultation bilaterally, normal respiratory effort.<br/>Cardiovascular: Regular rate and rhythm, no murmurs. No LE edema.<br/>Abdomen: Soft, non-distended, non-tender to palpation. <br/><br/><b>Assessment / Plan:</b><br/>1. Preventative:<br/>- Colonoscopy: 53 years ago not normal.",
  "name": "Rau",
  "type": "",
  "short": "",
  "_rperm": [],
  "_wperm": [],
  "status": "inprogress",
  "session": {
    "link": {
      "id": "rJ5CHd3AG",
      "_id": "rJ5CHd3AG",
      "sid": "SM4f67ffcec46e4176a9fe3ab5147d9c9a",
      "uid": "H1t0SO2RG",
      "url": "https://my-demo.healthnote.co/chat/H1t0SO2RG",
      "name": "A",
      "type": "/visit-colonoscopy/eng/0",
      "phone": "6502706681",
      "_rperm": [],
      "_wperm": [],
      "status": "sent",
      "_created_at": "2018-05-18T15:48:33.726Z",
      "_created_by": "HyhWxHRTM",
      "_updated_at": "2018-05-18T15:48:33.726Z",
      "_updated_by": "HyhWxHRTM"
    },
    "name": "Rau",
    "gender": "Male",
    "height": "Yu",
    "weight": "28",
    "alcohol": "no",
    "birthday": "2015-05-18",
    "continue": "no",
    "observers": {
      "HyhWxHRTM": "write"
    },
    "medication": {
      "meds": {
        "coumadin": {
          "dosage": "3 MG",
          "dosages": "1 MG | 10 MG| 2 MG| 2.5 MG| 3 MG| 4 MG| 5 MG| 6 MG| 7.5 MG",
          "conditions": {
            "atrial fibrillation or history of blood clots / dvt / pe": "afib / dvt / pe "
          },
          "medication": "Coumadin",
          "timesPerDay": "2"
        }
      },
      "lastentered": {
        "dosage": "3 MG",
        "dosages": "1 MG | 10 MG| 2 MG| 2.5 MG| 3 MG| 4 MG| 5 MG| 6 MG| 7.5 MG",
        "conditions": {
          "atrial fibrillation or history of blood clots / dvt / pe": "afib / dvt / pe "
        },
        "medication": "Coumadin",
        "timesPerDay": "2"
      }
    },
    "meds-yesno": "yes",
    "colonoscopy": "yes",
    "currentPath": "/visit-colonoscopy/eng/38",
    "sleep-apnea": "no",
    "smoke-yesno": "no",
    "constipation": "no",
    "resume-later": "tomorrow",
    "pharmacy-name": "Walk",
    "pharmacy-address": "125 Mission Street, San Francisco, CA 94110",
    "colonoscopy-years": "53",
    "colonoscopy-reason": "Ok",
    "colonoscopy-findings": "none",
    "drug-allergies-yesno": "yes",
    "colonoscopy-physician": "Rau",
    "illicitdrug-use-yesno": "no",
    "drug-allergies-details": [
      "Work eat too much"
    ],
    "anesthesia-reaction-yesno": "no",
    "medical-history-surgeries": "Carotid, Joint replacement",
    "pharmacy-preferenace-yesno": "yes",
    "medical-history-surgery-yesno": "yes",
    "medical-history-chronic-illnesses": "History of Cancer, High Blood Pressure",
    "family-history-colonuterine-cancer": "no"
  },
  "objective": [],
  "assessment": [],
  "_created_at": "2018-05-18T16:05:24.973Z",
  "_created_by": "HyhWxHRTM",
  "_updated_at": "2018-05-18T16:05:24.973Z",
  "_updated_by": "HyhWxHRTM",
  "medications": []
}

data.session.gender =data.session.gender.toLowerCase()
if(data.session.gender==='female'){
  data.adj='She';
}else{
    data.adj='He';
}
var arr =[];
/*for(var i =0 ; i<data.session['drug-allergies-meds'].length;i++){
   arr.push(data.session['drug-allergies-meds'][i]+": "+data.session['drug-allergies-details'][i]);
}*/
data.allergies=arr;
var meds =data.session.medication.meds;
  var keys =Object.keys( meds);
  var arr2=[];
   keys.forEach(function(key) {
      arr2.push(meds[key].medication +' '+meds[key].dosage+''+meds[key].timesPerDay+'/ day');
   });
 data.medicns=arr2;
