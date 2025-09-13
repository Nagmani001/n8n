import PersonalCard from "@/components/info";
import { useParams } from "react-router-dom"

export default function Arena() {
  const { id } = useParams();

  return <div>
    <PersonalCard />
  </div>
}


