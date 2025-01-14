import command from '../../config.json' assert {type: 'json'};

const createAbout = (): string[] => {
  const about: string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const LINKEDIN = "LinkedIn";
  const GITHUB = "GitHub";
  const GITLAB = "GitLab";
  const X = "X";
  const INSTAGRAM = "Instagram";
  const FACEBOOK = "Facebook";
  const DIARY = "Diary";
  const MEDIUM = "Medium"
  const TRYHACKME = "TryHackMe";
  const HACKTHEBOX = "HackTheBox";
  const DISCORD = "Discord"

  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const gitlab = `<i class='fa-brands fa-gitlab'></i> ${GITLAB}`;
  const x = `<i class='fa-brands fa-x'></i> ${X}`;
  const instagram = `<i class='fa-brands fa-instagram'></i> ${INSTAGRAM}`;
  const facebook = `<i class='fa-brands fa-facebook'></i> ${FACEBOOK}`;
  const diary = `<i class="fa fa-book"></i> ${DIARY}`;
  const medium = `<i class='fa-brands fa-medium'></i> ${MEDIUM}`;
  const tryhackme = `<i class='fa fa-globe'></i> ${TRYHACKME}`;
  const hackthebox = `<i class='fa fa-globe'></i> ${HACKTHEBOX}`;
  const discord = `<i class='fa-brands fa-discord'></i> ${DISCORD}`;

  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");


  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += gitlab;
  string += SPACE.repeat(17 - GITLAB.length);
  string += `<a target='_blank' href='https://gitlab.com/${command.social.gitlab}'>gitlab/${command.social.gitlab}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += x;
  string += SPACE.repeat(17 - X.length);
  string += `<a target='_blank' href='https://x.com/${command.social.x}'>x/${command.social.x}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += discord;
  string += SPACE.repeat(17 - DISCORD.length);
  string += `<a target='_blank' href='https://discord.com/users/${command.social.discord}'>discord/${command.social.discord}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += instagram;
  string += SPACE.repeat(17 - INSTAGRAM.length);
  string += `<a target='_blank' href='https://instagram.com/${command.social.instagram}'>instagram/${command.social.instagram}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += facebook;
  string += SPACE.repeat(17 - FACEBOOK.length);
  string += `<a target='_blank' href='https://facebook.com/${command.social.facebook}'>facebook/${command.social.facebook}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += diary;
  string += SPACE.repeat(17 - DIARY.length);
  string += `<a target='_blank' href='${command.diaryLink}'>writups</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += medium;
  string += SPACE.repeat(17 - MEDIUM.length);
  string += `<a target='_blank' href='https://medium.com/${command.social.medium}'>medium/${command.social.medium}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += tryhackme;
  string += SPACE.repeat(17 - TRYHACKME.length);
  string += `<a target='_blank' href='https://tryhackme.com/r/p/${command.social.tryhackme}'>tryhackme/${command.social.tryhackme}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += hackthebox;
  string += SPACE.repeat(17 - HACKTHEBOX.length);
  string += `<a target='_blank' href='https://app.hackthebox.com/profile/${command.social.hackthebox}'>hackthebox/${command.social.hackthebox}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
