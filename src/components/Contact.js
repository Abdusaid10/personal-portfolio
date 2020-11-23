import React from 'react';
import '../assets/styles/Contacts.css';
import ghLogo from '../assets/imgs/github-logo.png';
import linkedIn from '../assets/imgs/linkin.jpg';

const Contact = () => (
  <div id="contacts">
    <a href="https://github.com/Abdusaid10">
      <img id="ghLogo" src={ghLogo} alt="GitHub" />
    </a>
    <a href="https://www.linkedin.com/in/abdusaid/">
      <img id="linkedIn" src={linkedIn} alt="LinkedIn" />
    </a>
    <a href="https://angel.co/u/abdusaid-abdurasulov">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.2291 10.3758C18.1426 10.5164 18.775 10.938 19.1263 11.5001C19.4777 12.0623 19.6885 13.046 19.6885 14.3108C19.6885 16.8405 18.9155 18.9485 17.3697 20.5647C15.8238 22.1808 13.8563 23.024 11.4672 23.024C10.5537 23.024 9.6402 22.8835 8.72672 22.5322C7.81324 22.1808 7.11056 21.689 6.47815 21.1268C5.77547 20.4944 5.21333 19.7215 4.86199 19.0188C4.58092 18.2458 4.37012 17.4729 4.37012 16.6999C4.37012 15.8567 4.58092 15.1541 4.93226 14.6622C5.2836 14.1703 5.91601 13.8892 6.68895 13.6784C6.54842 13.3271 6.40788 13.046 6.33761 12.7649C6.26735 12.5541 6.19708 12.3433 6.19708 12.2028C6.19708 11.7812 6.40788 11.2893 6.89976 10.7974C7.39163 10.3056 7.81324 10.0948 8.23484 10.0948C8.44565 10.0948 8.58618 10.0948 8.79699 10.165C9.00779 10.2353 9.21859 10.3056 9.49966 10.5164C8.86725 8.40834 8.23484 6.65165 7.88351 5.4571C7.53217 4.26255 7.39163 3.4896 7.39163 2.99773C7.39163 2.36532 7.53217 1.87344 7.88351 1.5221C8.16458 1.17076 8.65645 0.959961 9.21859 0.959961C10.1321 0.959961 11.3266 3.06799 12.8022 7.35433C13.0833 8.05701 13.2239 8.61915 13.3644 9.04075C13.5049 8.75968 13.6455 8.26781 13.8563 7.70567C15.3319 3.4896 16.5967 1.38157 17.5805 1.38157C18.0723 1.38157 18.4939 1.5221 18.8453 1.87344C19.1264 2.22478 19.3372 2.71666 19.3372 3.2788C19.3372 3.7004 19.1966 4.54362 18.8453 5.73817C18.4237 6.93272 17.9318 8.47861 17.2291 10.3758ZM6.40788 16.5594C6.54842 16.6999 6.75922 16.981 6.97002 17.3324C7.60243 18.2458 8.23484 18.7377 8.79699 18.7377C9.00779 18.7377 9.14833 18.6674 9.28886 18.5269C9.4294 18.3864 9.49966 18.2458 9.49966 18.1756C9.49966 18.035 9.4294 17.754 9.21859 17.4026C9.00779 17.0513 8.72672 16.6297 8.37538 16.2081C7.95377 15.7162 7.60243 15.2946 7.39163 15.0838C7.11056 14.873 6.89976 14.7324 6.75922 14.7324C6.40788 14.7324 6.05654 14.9432 5.77547 15.2946C5.4944 15.6459 5.35387 16.1378 5.35387 16.6297C5.35387 17.0513 5.42413 17.4729 5.63494 18.035C5.84574 18.5269 6.12681 19.089 6.54842 19.5809C7.18083 20.2836 7.88351 20.916 8.79699 21.3376C9.71047 21.7592 10.6239 21.97 11.7482 21.97C13.7157 21.97 15.3319 21.2673 16.667 19.7917C18.0021 18.3161 18.6345 16.4891 18.6345 14.2406C18.6345 13.5379 18.5642 13.046 18.4939 12.6244C18.4237 12.2028 18.2129 11.9217 18.0021 11.7812C17.5805 11.4299 16.8075 11.1488 15.613 10.8677C14.4184 10.5866 13.1536 10.4461 11.8888 10.4461C11.5374 10.4461 11.2564 10.5164 11.1158 10.6569C10.9753 10.7974 10.905 11.0083 10.905 11.2893C10.905 11.992 11.2564 12.4839 12.0293 12.7649C12.8022 13.046 14.0671 13.2568 15.7535 13.2568H16.3859C16.5264 13.2568 16.667 13.3271 16.7372 13.3974C16.8075 13.5379 16.8778 13.6784 16.8778 13.8892C16.7372 14.0298 16.3859 14.2406 15.8238 14.4514C15.2616 14.6622 14.9103 14.873 14.6292 15.0838C13.9968 15.5054 13.5049 16.0675 13.1536 16.6999C12.8022 17.3324 12.5914 17.8945 12.5914 18.4566C12.5914 18.808 12.6617 19.1593 12.8022 19.6512C12.9428 20.1431 13.0131 20.4241 13.0131 20.4944V20.6349V20.7755C12.5914 20.7755 12.2401 20.4944 11.959 20.0025C11.678 19.5107 11.6077 18.8782 11.6077 18.035V17.8945C11.5374 17.9648 11.4672 18.035 11.3969 18.035C11.3266 18.035 11.2564 18.1053 11.1158 18.1053H10.8348C10.7645 18.1053 10.6942 18.035 10.5537 18.035C10.5537 18.1756 10.6239 18.2458 10.6239 18.3864V18.6674C10.6239 19.0188 10.4834 19.3701 10.2023 19.6512C9.92127 19.9323 9.56993 20.0728 9.14833 20.0728C8.51592 20.0728 7.88351 19.7917 7.18083 19.1593C6.54842 18.5269 6.19708 17.9648 6.19708 17.3324C6.19708 17.1918 6.19708 17.1215 6.26735 17.0513C6.26735 16.6999 6.33761 16.6297 6.40788 16.5594ZM10.9753 16.9107C11.1158 16.9107 11.3266 16.8405 11.4672 16.6999C11.6077 16.5594 11.678 16.3486 11.678 16.2081C11.678 15.9973 11.5374 15.5757 11.2564 14.873C10.9753 14.1703 10.6239 13.4676 10.2023 12.8352C9.92127 12.3433 9.56993 11.9217 9.28886 11.7109C9.00779 11.4299 8.72672 11.3596 8.44565 11.3596C8.23484 11.3596 8.02404 11.5001 7.74297 11.7812C7.4619 12.0623 7.39163 12.2731 7.39163 12.5541C7.39163 12.7649 7.53217 13.1866 7.74297 13.6784C8.02404 14.1703 8.30511 14.6622 8.72672 15.2243C9.14833 15.7865 9.56993 16.2783 9.99154 16.6297C10.4131 16.7702 10.6942 16.9107 10.9753 16.9107ZM12.4509 9.6029L10.7645 4.89496C10.3429 3.7004 10.0618 2.85719 9.78074 2.50585C9.56993 2.15451 9.35913 1.94371 9.07806 1.94371C8.86725 1.94371 8.72672 2.01398 8.58618 2.15451C8.37538 2.36532 8.30511 2.57612 8.30511 2.85719C8.30511 3.34907 8.51592 4.12201 8.86725 5.24629C9.21859 6.37058 9.78074 7.91647 10.4834 9.74343C10.5537 9.6029 10.6239 9.53263 10.7645 9.53263C10.905 9.46236 11.0456 9.46236 11.1861 9.46236H11.5374C11.7482 9.53263 12.0293 9.53263 12.4509 9.6029ZM14.1373 14.1703C13.7157 14.1703 13.2941 14.1 12.8725 14.0298C12.4509 13.9595 12.0996 13.8892 11.7482 13.7487C11.8888 14.1 12.0293 14.3811 12.1698 14.7324C12.3104 15.0838 12.3806 15.3649 12.4509 15.7162C12.6617 15.4351 12.9428 15.1541 13.2239 14.873C13.5752 14.5919 13.8563 14.3811 14.1373 14.1703ZM16.1751 10.0948C16.8778 8.26781 17.3697 6.72192 17.7913 5.52737C18.1426 4.33281 18.3534 3.63014 18.3534 3.34907C18.3534 3.06799 18.2831 2.85719 18.1426 2.64639C18.0021 2.50585 17.8615 2.43558 17.6507 2.43558C17.3697 2.43558 17.0886 2.64639 16.8075 3.13826C16.5264 3.63014 16.1751 4.33281 15.8238 5.38683L14.2779 9.74343L16.1751 10.0948Z" fill="white" />
      </svg>
    </a>
  </div>
);

// const contacts = {
//   GitHub: 'https://github.com/Abdusaid10',
//   LinkedIn: 'https://www.linkedin.com/in/abdusaid/',
//   AngelList: 'https://angel.co/u/abdusaid-abdurasulov',
// };

export default Contact;
