const whoamiObj = {
  "message" : [
    [
      "The Engineer,",
      "I build and optimize systems,",
      "Helping to make human life easier through computers - then, "
    ],
    [
      "Security Researcher,",
      "Adopting the Hacker culture,",
      "I identify vulnerabilities and strengthen defenses to protect digital landscapes - then, "
    ],
    [
      "Software Developer,",
      "I create software solutions that turn ideas into functional, scalable applications - then, ",
    ],
    [
      "Student,",
      "I continuously learn and adapt - then, "
    ],
    [
      "Tech Facilator,",
      "Bridge the gap between learner and technology - then, "
    ],
    [
      "Tech Guy,",
      "I troubleshoot and support, ensuring technology works seamlessly in everyday life - then, "
    ],
  ],
}

export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
