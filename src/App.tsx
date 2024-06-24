import { Form } from "./sections/Form";
import { Home } from "./sections/Home";

export default function App() {

  return (
    <div className="flex w-full h-auto flex-col items-center font-sans">
      <Home />
      <Form />
    </div>
  )
}

