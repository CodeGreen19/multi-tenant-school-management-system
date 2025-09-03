import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PaymentPage() {
  return (
    <div>
      <PaymentInfoCard />
    </div>
  );
}

function PaymentInfoCard() {
  return (
    <Card className="max-w-sm md:max-w-md m-auto p-6 md:p-8">
      <CardContent>
        <div className="flex flex-col items-start text-center">
          <h1 className="text-2xl font-bold">Choose plan</h1>
          <p className="text-muted-foreground text-balance">
            Sign up to create an admin account.
          </p>
        </div>
        <div className="mt-3">
          <Button className="w-full ">Pay 5000 BDT</Button>
        </div>
      </CardContent>
    </Card>
  );
}
