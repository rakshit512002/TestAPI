import Left from "./left";
import Right from "./right";
import Script from 'next/script'
 export default function Main()
 {
    return <>
    <div className="Page" >
    <Left></Left>
    <Right></Right>
    </div>
    <Script src="scripts/left.js"></Script>
  <Script src="scripts/right.js"></Script>
    </>
 }