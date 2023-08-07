import { useEffect, useState, useRef } from "react";
import './App.css';

//bai 1

// function App() {
//   //set state button back to top
//   const [isVisible, setIsVisible] = useState(false);

//   //use useRef to store reference to the previous scroll position
//   const prevScrollPos = useRef(0);

//   //function scroll to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   //use useEffect
//   useEffect(() => {
//     const toggleVisibility = () => {
//       const currentScrollPos = window.scrollY;
//       if (currentScrollPos > 0 && currentScrollPos < prevScrollPos.current) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//       prevScrollPos.current = currentScrollPos;
//     }
//     window.addEventListener("scroll", toggleVisibility);

//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, [isVisible]);

//   return (
//     <>
//       <div className="my-app">
//         <h1>Lorem Ipsum</h1>
//         <p>Aliquip cupidatat deserunt ipsum enim nisi Lorem minim qui ea nisi consectetur ut. Voluptate consectetur culpa magna esse pariatur ullamco. Cupidatat reprehenderit pariatur do commodo laboris minim pariatur duis ipsum occaecat ad nulla esse.

//           Elit reprehenderit Lorem magna quis duis laboris ea eiusmod do. Do nulla irure occaecat et proident proident. Ad mollit ipsum nostrud eu voluptate proident. Minim ipsum pariatur exercitation sint id tempor duis eiusmod reprehenderit deserunt minim. Commodo officia incididunt duis esse incididunt laboris culpa exercitation ipsum eu. Proident esse amet aliqua Lorem magna elit. Ut consequat reprehenderit dolor ipsum ea nulla.

//           Ex dolor consequat consectetur esse mollit qui laboris qui tempor aute dolor sunt. Ex cillum id commodo et pariatur minim. Eu duis anim amet officia consequat ea ea consequat veniam. In est cillum laborum commodo sunt id magna dolor excepteur occaecat esse ea voluptate.

//           Minim incididunt nulla occaecat ea cupidatat aliqua. Adipisicing tempor laborum culpa est consequat ad nostrud duis deserunt consectetur proident. Enim esse duis minim elit officia laboris consectetur dolor enim eiusmod nulla adipisicing quis. Quis officia laborum sint labore aliquip consectetur. Officia mollit velit reprehenderit sint tempor ex irure laboris irure sint voluptate.

//           Laboris cillum amet sunt mollit irure. Voluptate occaecat laboris cillum magna aliquip eu. Amet do anim nostrud commodo Lorem proident. Reprehenderit esse minim pariatur nostrud exercitation sit minim et nostrud nulla fugiat tempor consequat.

//           Sint culpa cupidatat deserunt sint eu voluptate anim proident nulla enim voluptate occaecat esse ut. Non magna ea proident cupidatat proident. Sunt enim aute duis ullamco sit. Commodo adipisicing sint pariatur amet et irure qui ea magna. Amet veniam anim sint eu quis in. In proident tempor elit consectetur.

//           Sit et elit ad culpa. Aute ullamco et labore sunt minim labore laboris cillum enim non laborum reprehenderit voluptate. Tempor qui esse sunt aliquip nostrud. Voluptate cillum irure velit nulla laboris cupidatat in ut eu. Magna consequat ea dolor ullamco dolor qui sint pariatur esse culpa. Duis dolor aute nostrud laboris id in do fugiat officia dolor consequat exercitation labore labore.

//           Reprehenderit qui amet nisi aute sunt et exercitation non sunt nisi ipsum. Dolor cupidatat in ullamco anim elit culpa Lorem deserunt commodo. Commodo id dolore commodo ad quis amet ut enim nostrud excepteur. Ea qui cillum qui cillum dolor cupidatat ullamco nostrud eiusmod. Proident dolore veniam reprehenderit incididunt. Officia excepteur adipisicing mollit proident incididunt velit do sunt consequat ex ea culpa nisi elit.</p>
//         <p>Aliquip cupidatat deserunt ipsum enim nisi Lorem minim qui ea nisi consectetur ut. Voluptate consectetur culpa magna esse pariatur ullamco. Cupidatat reprehenderit pariatur do commodo laboris minim pariatur duis ipsum occaecat ad nulla esse.

//           Elit reprehenderit Lorem magna quis duis laboris ea eiusmod do. Do nulla irure occaecat et proident proident. Ad mollit ipsum nostrud eu voluptate proident. Minim ipsum pariatur exercitation sint id tempor duis eiusmod reprehenderit deserunt minim. Commodo officia incididunt duis esse incididunt laboris culpa exercitation ipsum eu. Proident esse amet aliqua Lorem magna elit. Ut consequat reprehenderit dolor ipsum ea nulla.

//           Ex dolor consequat consectetur esse mollit qui laboris qui tempor aute dolor sunt. Ex cillum id commodo et pariatur minim. Eu duis anim amet officia consequat ea ea consequat veniam. In est cillum laborum commodo sunt id magna dolor excepteur occaecat esse ea voluptate.

//           Minim incididunt nulla occaecat ea cupidatat aliqua. Adipisicing tempor laborum culpa est consequat ad nostrud duis deserunt consectetur proident. Enim esse duis minim elit officia laboris consectetur dolor enim eiusmod nulla adipisicing quis. Quis officia laborum sint labore aliquip consectetur. Officia mollit velit reprehenderit sint tempor ex irure laboris irure sint voluptate.

//           Laboris cillum amet sunt mollit irure. Voluptate occaecat laboris cillum magna aliquip eu. Amet do anim nostrud commodo Lorem proident. Reprehenderit esse minim pariatur nostrud exercitation sit minim et nostrud nulla fugiat tempor consequat.

//           Sint culpa cupidatat deserunt sint eu voluptate anim proident nulla enim voluptate occaecat esse ut. Non magna ea proident cupidatat proident. Sunt enim aute duis ullamco sit. Commodo adipisicing sint pariatur amet et irure qui ea magna. Amet veniam anim sint eu quis in. In proident tempor elit consectetur.

//           Sit et elit ad culpa. Aute ullamco et labore sunt minim labore laboris cillum enim non laborum reprehenderit voluptate. Tempor qui esse sunt aliquip nostrud. Voluptate cillum irure velit nulla laboris cupidatat in ut eu. Magna consequat ea dolor ullamco dolor qui sint pariatur esse culpa. Duis dolor aute nostrud laboris id in do fugiat officia dolor consequat exercitation labore labore.

//           Reprehenderit qui amet nisi aute sunt et exercitation non sunt nisi ipsum. Dolor cupidatat in ullamco anim elit culpa Lorem deserunt commodo. Commodo id dolore commodo ad quis amet ut enim nostrud excepteur. Ea qui cillum qui cillum dolor cupidatat ullamco nostrud eiusmod. Proident dolore veniam reprehenderit incididunt. Officia excepteur adipisicing mollit proident incididunt velit do sunt consequat ex ea culpa nisi elit.</p>
//         <p>Aliquip cupidatat deserunt ipsum enim nisi Lorem minim qui ea nisi consectetur ut. Voluptate consectetur culpa magna esse pariatur ullamco. Cupidatat reprehenderit pariatur do commodo laboris minim pariatur duis ipsum occaecat ad nulla esse.

//           Elit reprehenderit Lorem magna quis duis laboris ea eiusmod do. Do nulla irure occaecat et proident proident. Ad mollit ipsum nostrud eu voluptate proident. Minim ipsum pariatur exercitation sint id tempor duis eiusmod reprehenderit deserunt minim. Commodo officia incididunt duis esse incididunt laboris culpa exercitation ipsum eu. Proident esse amet aliqua Lorem magna elit. Ut consequat reprehenderit dolor ipsum ea nulla.

//           Ex dolor consequat consectetur esse mollit qui laboris qui tempor aute dolor sunt. Ex cillum id commodo et pariatur minim. Eu duis anim amet officia consequat ea ea consequat veniam. In est cillum laborum commodo sunt id magna dolor excepteur occaecat esse ea voluptate.

//           Minim incididunt nulla occaecat ea cupidatat aliqua. Adipisicing tempor laborum culpa est consequat ad nostrud duis deserunt consectetur proident. Enim esse duis minim elit officia laboris consectetur dolor enim eiusmod nulla adipisicing quis. Quis officia laborum sint labore aliquip consectetur. Officia mollit velit reprehenderit sint tempor ex irure laboris irure sint voluptate.

//           Laboris cillum amet sunt mollit irure. Voluptate occaecat laboris cillum magna aliquip eu. Amet do anim nostrud commodo Lorem proident. Reprehenderit esse minim pariatur nostrud exercitation sit minim et nostrud nulla fugiat tempor consequat.

//           Sint culpa cupidatat deserunt sint eu voluptate anim proident nulla enim voluptate occaecat esse ut. Non magna ea proident cupidatat proident. Sunt enim aute duis ullamco sit. Commodo adipisicing sint pariatur amet et irure qui ea magna. Amet veniam anim sint eu quis in. In proident tempor elit consectetur.

//           Sit et elit ad culpa. Aute ullamco et labore sunt minim labore laboris cillum enim non laborum reprehenderit voluptate. Tempor qui esse sunt aliquip nostrud. Voluptate cillum irure velit nulla laboris cupidatat in ut eu. Magna consequat ea dolor ullamco dolor qui sint pariatur esse culpa. Duis dolor aute nostrud laboris id in do fugiat officia dolor consequat exercitation labore labore.

//           Reprehenderit qui amet nisi aute sunt et exercitation non sunt nisi ipsum. Dolor cupidatat in ullamco anim elit culpa Lorem deserunt commodo. Commodo id dolore commodo ad quis amet ut enim nostrud excepteur. Ea qui cillum qui cillum dolor cupidatat ullamco nostrud eiusmod. Proident dolore veniam reprehenderit incididunt. Officia excepteur adipisicing mollit proident incididunt velit do sunt consequat ex ea culpa nisi elit.</p>
//         <p>Aliquip cupidatat deserunt ipsum enim nisi Lorem minim qui ea nisi consectetur ut. Voluptate consectetur culpa magna esse pariatur ullamco. Cupidatat reprehenderit pariatur do commodo laboris minim pariatur duis ipsum occaecat ad nulla esse.

//           Elit reprehenderit Lorem magna quis duis laboris ea eiusmod do. Do nulla irure occaecat et proident proident. Ad mollit ipsum nostrud eu voluptate proident. Minim ipsum pariatur exercitation sint id tempor duis eiusmod reprehenderit deserunt minim. Commodo officia incididunt duis esse incididunt laboris culpa exercitation ipsum eu. Proident esse amet aliqua Lorem magna elit. Ut consequat reprehenderit dolor ipsum ea nulla.

//           Ex dolor consequat consectetur esse mollit qui laboris qui tempor aute dolor sunt. Ex cillum id commodo et pariatur minim. Eu duis anim amet officia consequat ea ea consequat veniam. In est cillum laborum commodo sunt id magna dolor excepteur occaecat esse ea voluptate.

//           Minim incididunt nulla occaecat ea cupidatat aliqua. Adipisicing tempor laborum culpa est consequat ad nostrud duis deserunt consectetur proident. Enim esse duis minim elit officia laboris consectetur dolor enim eiusmod nulla adipisicing quis. Quis officia laborum sint labore aliquip consectetur. Officia mollit velit reprehenderit sint tempor ex irure laboris irure sint voluptate.

//           Laboris cillum amet sunt mollit irure. Voluptate occaecat laboris cillum magna aliquip eu. Amet do anim nostrud commodo Lorem proident. Reprehenderit esse minim pariatur nostrud exercitation sit minim et nostrud nulla fugiat tempor consequat.

//           Sint culpa cupidatat deserunt sint eu voluptate anim proident nulla enim voluptate occaecat esse ut. Non magna ea proident cupidatat proident. Sunt enim aute duis ullamco sit. Commodo adipisicing sint pariatur amet et irure qui ea magna. Amet veniam anim sint eu quis in. In proident tempor elit consectetur.

//           Sit et elit ad culpa. Aute ullamco et labore sunt minim labore laboris cillum enim non laborum reprehenderit voluptate. Tempor qui esse sunt aliquip nostrud. Voluptate cillum irure velit nulla laboris cupidatat in ut eu. Magna consequat ea dolor ullamco dolor qui sint pariatur esse culpa. Duis dolor aute nostrud laboris id in do fugiat officia dolor consequat exercitation labore labore.

//           Reprehenderit qui amet nisi aute sunt et exercitation non sunt nisi ipsum. Dolor cupidatat in ullamco anim elit culpa Lorem deserunt commodo. Commodo id dolore commodo ad quis amet ut enim nostrud excepteur. Ea qui cillum qui cillum dolor cupidatat ullamco nostrud eiusmod. Proident dolore veniam reprehenderit incididunt. Officia excepteur adipisicing mollit proident incididunt velit do sunt consequat ex ea culpa nisi elit.</p>
//         <p>Aliquip cupidatat deserunt ipsum enim nisi Lorem minim qui ea nisi consectetur ut. Voluptate consectetur culpa magna esse pariatur ullamco. Cupidatat reprehenderit pariatur do commodo laboris minim pariatur duis ipsum occaecat ad nulla esse.

//           Elit reprehenderit Lorem magna quis duis laboris ea eiusmod do. Do nulla irure occaecat et proident proident. Ad mollit ipsum nostrud eu voluptate proident. Minim ipsum pariatur exercitation sint id tempor duis eiusmod reprehenderit deserunt minim. Commodo officia incididunt duis esse incididunt laboris culpa exercitation ipsum eu. Proident esse amet aliqua Lorem magna elit. Ut consequat reprehenderit dolor ipsum ea nulla.

//           Ex dolor consequat consectetur esse mollit qui laboris qui tempor aute dolor sunt. Ex cillum id commodo et pariatur minim. Eu duis anim amet officia consequat ea ea consequat veniam. In est cillum laborum commodo sunt id magna dolor excepteur occaecat esse ea voluptate.

//           Minim incididunt nulla occaecat ea cupidatat aliqua. Adipisicing tempor laborum culpa est consequat ad nostrud duis deserunt consectetur proident. Enim esse duis minim elit officia laboris consectetur dolor enim eiusmod nulla adipisicing quis. Quis officia laborum sint labore aliquip consectetur. Officia mollit velit reprehenderit sint tempor ex irure laboris irure sint voluptate.

//           Laboris cillum amet sunt mollit irure. Voluptate occaecat laboris cillum magna aliquip eu. Amet do anim nostrud commodo Lorem proident. Reprehenderit esse minim pariatur nostrud exercitation sit minim et nostrud nulla fugiat tempor consequat.

//           Sint culpa cupidatat deserunt sint eu voluptate anim proident nulla enim voluptate occaecat esse ut. Non magna ea proident cupidatat proident. Sunt enim aute duis ullamco sit. Commodo adipisicing sint pariatur amet et irure qui ea magna. Amet veniam anim sint eu quis in. In proident tempor elit consectetur.

//           Sit et elit ad culpa. Aute ullamco et labore sunt minim labore laboris cillum enim non laborum reprehenderit voluptate. Tempor qui esse sunt aliquip nostrud. Voluptate cillum irure velit nulla laboris cupidatat in ut eu. Magna consequat ea dolor ullamco dolor qui sint pariatur esse culpa. Duis dolor aute nostrud laboris id in do fugiat officia dolor consequat exercitation labore labore.

//           Reprehenderit qui amet nisi aute sunt et exercitation non sunt nisi ipsum. Dolor cupidatat in ullamco anim elit culpa Lorem deserunt commodo. Commodo id dolore commodo ad quis amet ut enim nostrud excepteur. Ea qui cillum qui cillum dolor cupidatat ullamco nostrud eiusmod. Proident dolore veniam reprehenderit incididunt. Officia excepteur adipisicing mollit proident incididunt velit do sunt consequat ex ea culpa nisi elit.</p>
//         {isVisible &&
//           <button className="btn-top" onClick={scrollToTop}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
//             </svg>
//           </button>}
//       </div>
//     </>
//   );
// }


function App() {
  //setstate for textarea input
  const [init, setInit] = useState("");

  //setstate for word count
  const [wordCount, setWordCount] = useState("");

  //use useEffect
  useEffect(() => {
    const timeOutId = setTimeout(() => setWordCount(init), 500);

    return () => clearTimeout(timeOutId);
  }, [init]);

  return (
    <>
      <textarea cols={20} rows={4} value={init} onChange={(e) => setInit(e.target.value)} />
      <p> Word(s): {wordCount.split(" ").length}</p>
    </>
  )
}

export default App;
