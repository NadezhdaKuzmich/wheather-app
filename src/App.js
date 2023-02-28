import React from "react";
import Inform from "./components/inform";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "48bc45b5b2e0f7c5e3582546ec5bdd92";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    pressure: undefined,
    description: undefined,
    humidity: undefined,
    speed: undefined,
    deg: undefined,
    icon: undefined,
    error: undefined,
  };

  getWether = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
      .then(res => {
            if (res.status !== 200) {
              throw new Error(res.statusText)
            }
            return res;
        })
        .then(res => res.json())
        .then(data => {
          this.setState({
            city: data.name,
            country: data.sys.country,
            temp: Math.ceil(data.main.temp),
            pressure: data.main.pressure,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            speed: data.wind.speed,
            deg: data.wind.deg,
            icon: data.weather[0].icon,
            error: undefined,
          });
          event.target.elements.city.value = "";
        })
        .catch((err) => {
          this.setState({
            city: undefined,
            country: undefined,
            temp: undefined,
            pressure: undefined,
            description: undefined,
            humidity: undefined,
            speed: undefined,
            deg: undefined,
            icon: undefined,
            error: "Введіть коректну назву міста",
          });
          console.error(err)
        });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temp: undefined,
        pressure: undefined,
        description: undefined,
        humidity: undefined,
        speed: undefined,
        deg: undefined,
        icon: undefined,
        error: "Вкажіть назву міста",
      });
    }
  };

  hideMessage = () => {
    this.setState({
      error: "",
    });
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="weather-info">
            <Inform />
            <Form checkWeather={this.getWether} hideError={this.hideMessage}/>
            <Weather
              city={this.state.city}
              country={this.state.country}
              temp={this.state.temp}
              pressure={this.state.pressure}
              description={this.state.description}
              humidity={this.state.humidity}
              speed={this.state.speed}
              deg={this.state.deg}
              icon={this.state.icon}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
