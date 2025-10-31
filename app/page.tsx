import { Timeline } from "@/components/timeline";
import { Composer } from "@/components/composer";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="py-6 space-y-4">
      <h1 className="text-2xl font-bold tracking-tight">Home</h1>
      <Card>
        <CardContent className="p-4">
          <Composer />
        </CardContent>
      </Card>
      <Timeline />
    </main>
  );
}
