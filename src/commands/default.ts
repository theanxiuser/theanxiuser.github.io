const createDefault = () : string[] => {
  const defaultMsgArr = [
    "<br>",
    "System x86_64: command not found",
    "Type <span class='command'>'help'</span> to get started.",
    "<br>"
  ]  
  
  const defaultMsg : string[] = [];
  
  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  })

  return defaultMsg;
}

export const DEFAULT = createDefault();
