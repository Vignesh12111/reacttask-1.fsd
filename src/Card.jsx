import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
function Card({ item }) {
  return (
    <div className="col">
      <div className="card mb-4 rounded-4 shadow-sm">
        <div className="card-header py-3 ">
          <h4 className="my-0 fw-normal">{item.planName}</h4>
          <h1 className="card-title pricing-card-title">
            ${item.price}
            <small className="text-body-secondary fw-light">/month</small>
          </h1>
        </div>
        <div className="card-body">
          <ul className="list-unstyled mt-3 mb-4">
            {item.features.map((feature, index) => {
              return (
                <li key={index}>
                  {feature.enabled ? (
                    <span>
                      <TiTick />
                      {feature.name}
                    </span>
                  ) : (
                    <>
                      {" "}
                      <span style={{ color: "lightgray" }}>
                        <ImCross size={9} /> {feature.name}
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="w-100 btn rounded-4 btn-lg btn-primary"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
}
export default Card;