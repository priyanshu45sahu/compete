import React from "react";
import { useEffect, useState } from "react";
import { database } from "../firebase";
import { ref, onValue, runTransaction } from "firebase/database";
const CompetePage = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    const competeRef = ref(database, "compete");

    // Listen for counter updates
    onValue(competeRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      if (data) {
        setCount1(data.count1 || 0); // Update state with count1
        setCount2(data.count2 || 0); // Update state with count2
      }
    });

    // return () => {
    //   counterRef1.off();
    //   counterRef2.off();
    // };
  }, []);

  const incrementCounter1 = () => {
    const counterRef = ref(database, "compete/count1"); // Reference to count1
    runTransaction(counterRef, (currentValue) => {
      return (currentValue || 0) + 1; // Increment count1
    }).catch((error) => {
      console.error("Transaction failed: ", error); // Handle any potential errors
    });
  };

  const incrementCounter2 = () => {
    const counterRef = ref(database, "compete/count2"); // Reference to count2
    runTransaction(counterRef, (currentValue) => {
      return (currentValue || 0) + 1; // Increment count2
    }).catch((error) => {
      console.error("Transaction failed: ", error); // Handle any potential errors
    });
  };

  const resetCounters = () => {
    const counterRef1 = ref(database, "compete/count1"); // Reference to count2
    runTransaction(counterRef1, () => {
      return 0; // Increment count2
    }).catch((error) => {
      console.error("Transaction failed: ", error); // Handle any potential errors
    });
    const counterRef2 = ref(database, "compete/count2"); // Reference to count2
    runTransaction(counterRef2, () => {
      return 0;
    }).catch((error) => {
      console.error("Transaction failed: ", error); // Handle any potential errors
    });
  };

  const op1 = "Person1";
  const op2 = "Person2";

  return (
    <>
      <button onClick={resetCounters}>Reset</button>
      <h1>Compete</h1>
      <div className="grid-container">
        <div className="card">
          {/* <input></input> */}
          <h2>{op1}</h2>
          <button onClick={incrementCounter1}>count is {count1}</button>
          <p>Questions solved till now</p>
        </div>
        <div className="card">
          {/* <input></input> */}
          <h2>{op2}</h2>
          <button onClick={incrementCounter2}>count is {count2}</button>
          <p>Questions solved till now</p>
        </div>
      </div>
    </>
  );
};

export default CompetePage;
