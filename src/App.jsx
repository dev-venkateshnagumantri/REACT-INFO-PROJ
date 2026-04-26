import { useState } from 'react'
import './App.css'
import VideoCard from './Components/VideoCard.jsx'
import PracticeCard from './Components/PracticeCard1.jsx'
import ComponentA from './Components/ComponentA.jsx'
import OnChangePr from './Objects/OnChangePractice.jsx'
import ArrayCard from './Objects/ArrayCard.jsx'
import ObjectCard from './Objects/ObjectCard.jsx'
import { team } from './data.js'
import TeamMemberCard from './team/TeamMemberCard.jsx'

function App() {
    const [count, setCount] = useState(0)


    const employees = team.map(
      //for each team member, we are passing the data as props
        (member)=> {
            return <TeamMemberCard key={member.id} id={member.id} name={member.name} role={member.role} empId={member.empId}/>
        }
    );
  
  return (
    <>
      {employees}
      <ComponentA />
      <VideoCard />
      <PracticeCard />
      <ArrayCard />
      <ObjectCard />
      <OnChangePr />
    </>
   
  )
}

export default App;
