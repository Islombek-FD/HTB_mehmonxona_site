import './Features.css';

function Features() {
    return (
        <>
            <section id="features">

                <div className="box bg-light">
                    <i className="fas fa-home fa-3x"></i>
                    <h3>Great Location</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, voluptas!
                    </p>
                </div>

                <div className="box bg-primary">
                    <i className="fas fa-utensils fa-3x"></i>
                    <h3>Free Meals</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, voluptas!
                    </p>
                </div>

                <div className="box bg-light">
                    <i className="fas fa-dumbbell fa-3x"></i>
                    <h3>Fitness Room</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, voluptas!
                    </p>
                </div>
                
            </section>

            <div className="clr"></div>
        </> 
    )
}
    
export default Features;