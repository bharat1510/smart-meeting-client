// import React, { useEffect, useState } from 'react';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const Dictaphone1 = () => {
//  const [message, setMessage] = useState('');
//  const commands = [
//    {
//      command: 'reset',
//      callback: () => resetTranscript()
//    },
//    {
//      command: 'shut up',
//      callback: () => setMessage('I wasn\'t talking.')
//    },
//    {
//      command: 'Hello',
//      callback: () => setMessage('Hi there!')
//    },
//  ]
//  const {
//    transcript,
//    interimTranscript,
//    finalTranscript,
//    resetTranscript,
//    listening,
//  } = useSpeechRecognition({ commands });

//  useEffect(() => {
    

//     if (finalTranscript !== '') {
//       console.log('Got final result:', finalTranscript);
//     }
//   }, [interimTranscript, finalTranscript]);
//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return null;
//   }
 
//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
//   }
// //   const listenContinuously = () => {
   
// //   };

// }

// export default Dictaphone1;