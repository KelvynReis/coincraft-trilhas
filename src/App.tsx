import { Form } from "./sections/Form";
import { Home } from "./sections/Home";
import { Solution } from "./sections/Solution";

export default function App() {

  return (
    <div className="flex w-full h-auto flex-col items-center font-sans">
      <Home />
      <Solution />
      <Form />
    </div>
  )
}

