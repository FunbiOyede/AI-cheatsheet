import React, { Component } from "react";

const UserContext = React.createContext();

const ContextProvider = UserContext.Provider;
export const ContextConsumer = UserContext.Consumer;

class UserContexts extends Component {
  state = {
    // terminologies: [
    //   {
    //     id: 1,
    //     title: "Chatbots",
    //     definition:
    //       "A computer program which conducts a conversation via auditory or textual methods."
    //   },
    //   {
    //     id: 2,
    //     title: "Machine learning",
    //     definition:
    //       "Machine learning focuses on the development of computer programs that can access data and use to learn for themselves."
    //   },
    //   {
    //     id: 3,
    //     title: "Deep Learning",
    //     definition:
    //       "This is a method of machine learning based on the brain. It works by using previous information gathered to inform itself for new information and discoveries."
    //   },
    //   {
    //     id: 4,
    //     title: "Neural Networks",
    //     definition:
    //       "This is what makes deep learning work like the brain, connecting different pieces of information together, like neurons connecting at junctions. "
    //   },
    //   {
    //     id: 5,
    //     title: "Weak AI",
    //     definition:
    //       "Artificial intelligence which is specifically programmed and focused to execute a narrow task effectively."
    //   },
    //   {
    //     id: 6,
    //     title: "Strong AI",
    //     definition:
    //       "The main vision is to develop artificial intelligence to the point where the machine's intellectual capability is functionally equal to a human's. "
    //   },
    //   {
    //     id: 7,
    //     title: "Algorithmic ",
    //     definition:
    //       "An algorithm is a list of rules to follow in order to solve a problem. Algorithms need to have their steps in the right order to work properly."
    //   },
    //   {
    //     id: 8,
    //     title: "Algorithmic Bias",
    //     definition:
    //       "When the data used to teach a machine learning system reflects the values of humans involved in that data collection, selection, or use."
    //   },
    //   {
    //     id: 9,
    //     title: "Automation",
    //     definition:
    //       "Technology by which a process or procedure is performed without human assistance."
    //   },
    //   {
    //     id: 10,
    //     title: "Autonomous Cars",
    //     definition:
    //       "Is a vehicle that is capable of sensing its environment and navigating without human input."
    //   },
    //   {
    //     id: 12,
    //     title: "Chatbots",
    //     definition:
    //       "A computer program which conducts a conversation via auditory or textual methods."
    //   },
    //   {
    //     id: 13,
    //     title: "Data Mining",
    //     definition:
    //       "The practice of examining large pre-existing databases in order to generate new information."
    //   },
    //   {
    //     id: 14,
    //     title: "Data Science",
    //     definition:
    //       "An interdisciplinary field of methods, processes, algorithms and systems to extract knowledge or insights from data."
    //   },
    //   {
    //     id: 15,
    //     title: "Data",
    //     definition:
    //       "Information or knowledge is represented or coded in a form suitable for better usage or processing."
    //   },
    //   {
    //     id: 16,
    //     title: "Black Box",
    //     definition:
    //       "System or object which can be viewed to take inputs and produce outputs, without any knowledge of how it works inside."
    //   },
    //   {
    //     id: 17,
    //     title: "Reinforcement Learning",
    //     definition:
    //       "Inspired by behavioural psychology, reinforcement learning is learning by trial and error, solely from rewards or punishments."
    //   },
    //   {
    //     id: 18,
    //     title: "Turing Test",
    //     definition:
    //       "A machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human."
    //   },
    //   {
    //     id: 19,
    //     title: "Natural Language Processing",
    //     definition:
    //       "The application of specific data processing techniques to the analysis of natural language and speech."
    //   },
    //   {
    //     id: 20,
    //     title: "Artificial Intelligence",
    //     definition:
    //       "When the data used to teach a machine learning system reflects the values of humans involved in that data collection, selection, or use."
    //   },
    //   {
    //     id: 21,
    //     title: "Robotics",
    //     definition:
    //       "Technology that deals with the design, construction, operation, and application of robots."
    //   },
    //   {
    //     id: 22,
    //     title: "Data Sets",
    //     definition:
    //       "A collection of related sets of information that is composed of separate elements."
    //   },
    //   {
    //     id: 23,
    //     title: "What can AI do?",
    //     definition:
    //       "Examples include speaking, recognizing objects in images, navigating the Tube, recognizing your emotions, driving, powering Siri, Gmail, Amazon, Google Now, Netflix, Spotify and Google Maps. Translate languages, schedule meetings, play games and detect fraud."
    //   }
    // ]
    terminologies: {
      name: "funbi"
    }
  };

  render() {
    return (
      <ContextProvider value={this.state}>
        {this.props.children}
      </ContextProvider>
    );
  }
}
export default UserContexts;
