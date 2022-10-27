// const ExpandedSkill = () => {
//   return (
//               <div className="layer">
//                 <div id={id} className="stack-item">
//                     <div className="image">
//                         <img className={`stack-item__image stack-item__image--${sizing}`} src={img} alt={`${title} logo`} />
//                     </div>
//                     <span className="stack-item__title">{title}</span>
//                     <p className="stack-item__description">
//                         {width <= 1024 ?
//                             description : <>{modalOpen ? description : description.slice(0, 300) + '...'}</>
//                         }</p>
//                     {modalOpen ?
//                         <button onClick={handleCollapse} className="stack-item__expand"><span className="visible">Zakończ czytanie...</span><span className="invisible">Kliknij!</span></button>
//                         : <button onClick={handleExpand} className="stack-item__expand"><span className="visible">Czytaj dalej...</span><span className="invisible">Kliknij!</span></button>
//                     }
//                 </div>
//             </div>
//   );
// }
// export default ExpandedSkill;