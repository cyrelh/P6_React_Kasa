import { useState } from 'react' // Import de useState depuis React pour gérer l'état du composant
import iconCollapse from "../assets/collapse.png" // Import de l'icône collapse depuis les ressources
import "../styles/Collapse2.scss"

function Collapse({name, para}) { // Définition du composant Collapse avec les props {name, para}
    const [isOpen, setIsOpen] = useState(false)     // Déclaration d'un état local 'isOpen' pour suivre l'état d'ouverture ou de fermeture du contenu
        return (
            <>
            <div className="all-collapse2">             {/* Conteneur principal du Collapse */}
                <div className="collapse-content2">     {/* Contenu du Collapse */}
                    <div className="collapse-banner2">  {/* Bannière du Collapse */}
                        <div className="collapse-banner-name2">   {/* Nom du Collapse */}
                            <p>{name}</p> {/* Affichage du nom de la section */}
                            <img src={iconCollapse} // Définit la source de l'image de l'icône de collapse
                            alt={isOpen ? "collapse2" : "uncollapse2"} //Si isOpen est vrai, alors contenu est ouvert, donc l'alt est "collapse". Sinon, l'alt est "uncollapse"
                            className={isOpen ? "collapse2" : "uncollapse2"} // classes  utilisées pour appliquer des styles à l'icône en fonction de son état
                            onClick={() => setIsOpen(!isOpen)} /> 
                            {/* gestionnaire d'événements pour clic sur l'icône
                            Lorsque l'utilisateur clique sur l'icône, cette fonction est appelée pour inverser l'état d'ouverture (isOpen)
                            Cela signifie que si isOpen est vrai, il devient faux, et vice versa. */}
                        </div>
                    </div>
                    {/* Contenu rétractable du Collapse */}
                    <div className={isOpen ? "content2 show2" : "content2"}>
                        {/* Si para est une chaîne de caractères, affiche-la */}
                        {typeof para === "string" && (
                            <p>{para}</p>
                        )}
                     {/* . Si para est effectivement un tableau, alors le code à l'intérieur de la condition est exécuté. */}
                        {Array.isArray(para) && (
                            para.map((item, index) => ( // Pour chaque élément item du tableau, une fonction => pour générer un <p> qui affiche cet élément
                                <p key={item + index}>{item}</p> 
                                //on crée paragraphe pour chaque élément du tableau para. 
                                //La key = la concaténation de l'élément item et index ce qui garantit que chaque élément a une clé unique
                                //Cette clé va aider React à identifier chaque élément lors de la màj de l'interface utilisateur 
                            ))
                        )}
                    </div>
                </div>
            </div>
            </>
            ) 
}

export default Collapse
