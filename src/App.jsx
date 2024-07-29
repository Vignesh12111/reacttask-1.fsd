import "./App.css";
import Card from "./Card.jsx";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  let data = [
    {
      planName: "Free",
      price: 0,
      features: [
        {
          name: "Single user",
          enabled: true,
        },
        {
          name: "50GB Storage",
          enabled: true,
        },
        {
          name: "unlimited Public projects",
          enabled: true,
        },
        {
          name: "Community Access",
          enabled: true,
        },
        {
          name: "Unlimited Private Project",
          enabled: false,
        },
        {
          name: "Dedicated Phone Support",
          enabled: false,
        },
        {
          name: "Free Subdomain",
          enabled: false,
        },
        {
          name: "Monthly Status Reports",
          enabled: false,
        },
      ],
    },
    {
      planName: "Plus",
      price: 9,
      features: [
        {
          name: "5 User",
          enabled : true,
        },
        {
          name: "50GB Storage",
          enabled : true,
        },
        {
          name: "Unlimited Public Projects",
          enabled : true,
        },
        {
          name: "Community Access",
          enabled : true,
        },
        {
          name: "unlimited Private Projects",
          enabled : true,
        },
        {
          name: "Dedicated Phone Support",
          enabled : true,
        },
        {
          name: "Free Subdomain",
          enabled : true,
        },
        {
          name: "Monthly Status Reports",
          enabled : false,
        },
      ],
    },
    {
      planName: "Pro",
      price: 49,
      features: [
        {
          name: "unlimited Users",
          enabled : true,
        },
        {
          name: "50GB Storage",
          enabled : true,
        },
        {
          name: "Unlimeted Public Projects",
          enabled : true,
        },
        {
          name: "Community Access",
          enabled : true,
        },
        {
          name: "Unlimited Private Projects",
          enabled : true,
        },
        {
          name: "Dedicated phone Support",
          enabled : true,
        },
        {
          name: "Free Subdomain",
          enabled : true,
        },
        {
          name: "Monthly Status Reports",
          enabled : true,
        },
      ],
    },
  ];
  return (
    <div className="container rounded-5">
      <div className="row">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
