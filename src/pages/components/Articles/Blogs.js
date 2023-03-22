import Blog from "./Blog"
import Link from "next/link"
export default function Blogs (){
return(
    <div>
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
      <div className="col ">
<Blog title="Covention de partenariat avec zitouna Tamkeen"  img="https://cdn28.modele-lettre-gratuit.com/lettres/img/partenariat.jpg" secondText="kehdzbjehzvfjzehfvjhezvfjzevfjevfvjebfkzefbvkjfjbfzkef"  />
</div>
<div className="col ">
<Blog title="Covention de partenariat avec zitouna Tamkeen"  img="https://cdn28.modele-lettre-gratuit.com/lettres/img/partenariat.jpg" secondText="kehdzbjehzvfjzehfvjhezvfjzevfjevfvjebfkzefbvlnsdc;,d"  />
</div>
<div className="col ">
<Blog title="Covention de partenariat avec zitouna Tamkeen"  img="https://cdn28.modele-lettre-gratuit.com/lettres/img/partenariat.jpg" secondText="kehdzbjehzvfjzehfvjhezvfjzevfjevfvjebfkzefbv;nqf;eaznf"  />
</div>

</div>
</div>
<div className="container-fluid d-flex justify-content-center">
<Link href="../../Articles"><button  className="blog-button  ">view all Articles</button></Link>
</div>

</div>

)
}