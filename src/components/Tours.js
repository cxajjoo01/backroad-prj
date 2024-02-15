import Title from "./Title";
import { tourDetails } from "../data";
const Tours =()=>{
    return (
    <div>
    <section className="section" id="tours">
    <Title
      title="featured"
      subTitle="tours"
    />

      <div className="section-center featured-center">
        {tourDetails.map((tour)=>{
          const {id, img, date, title, text, location, duration, cost} = tour;
          return(
            <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={img} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
             {text}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>{cost}</p>
            </div>
          </div>
        </article>
          )
        })}
        
      </div>
    </section> 
</div>
    )
}
export default Tours;