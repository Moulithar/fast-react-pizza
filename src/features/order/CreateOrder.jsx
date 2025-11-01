import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 3,
    unitPrice: 16,
    totalPrice: 48,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const formErrors = useActionData();

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 ">
      <h2 className="text-3xl mb-4">Ready to order? Let's go!</h2>

      {/* <pre>{JSON.stringify(formErrors, null, 2)}</pre> */}
      <Form method="POST" action="/order/new" className="flex flex-col gap-4">
        <div className="mb-5 flex flex-col sm:flex-row gap-2 sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input type="text" name="customer" required className="input grow" />
        </div>

        <div className="mb-5 flex flex-col sm:flex-row gap-2 sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
          {formErrors?.phone && (
            <p  className="text-xs mt-2 text-red-700 bg-red-100 rounded p-2">
              {formErrors?.phone}
            </p>
          )}
          </div>
        </div>

        <div className="mb-5 flex flex-col sm:flex-row gap-2 sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required className="input w-full" />
          </div>
        </div>

        <div className="mb-5 flex flex-row gap-2 items-center">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="w-6 h-6 accent-lime-400 outline-none  focus:ring focus:ring-lime-400 focus:ring-offset-2"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>
        <input type="hidden" name="cart" value={JSON.stringify(cart)} />

        <div>
          <Button isSubmitting={isSubmitting} type="primary">
            {isSubmitting ? "Please wait..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const orderData = Object.fromEntries(formData);

  const order = {
    ...orderData,
    cart: JSON.parse(orderData.cart),
    priority: orderData?.priority ? true : false,
  };

  console.log(order);

  const errors = {};

  if (!isValidPhone(order.phone)) {
    errors.phone = "Please provide a valid phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
