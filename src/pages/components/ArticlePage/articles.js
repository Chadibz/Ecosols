import { useEffect } from "react";
import Article from "./article"
import { items } from "./item";

export default function Articles() {
    useEffect(() => {
        //t3ayet service besh t3amer state articles
    }, [])
    return (
        <div className="articles-container">
            <div className="articles">
                {items.map((element, key) => <Article key={key} id={element.id} title={element.title} content={element.content} image={element.image} />)}


            </div>
        </div>
    )
}