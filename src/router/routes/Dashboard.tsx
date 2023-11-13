import EditTaskDialog from '@/components/EditTaskDialog'
import { useTasksStore } from '@/stores/tasksStore.ts'
import columns from '@/components/TasksTable/Columns'
import { Card } from '@/components/ui/card.tsx'
import Table from '@/components/TasksTable'
import Header from '@/components/Header'

export default function Dashboard() {
  const { tasks } = useTasksStore()

  return (
    <>
      <Header />
      <main
        className="container mb-12 mt-8 h-full flex-1 flex-col px-4
        sm:px-8"
      >
        <section className="mb-4">
          <h2 className="mb-2 text-4xl font-bold tracking-tight">
            Welcome, Elon!
          </h2>
          <p className="text-muted-foreground">
            Here are <span className="font-bold">{tasks.length}</span> tasks on
            you for today.
          </p>
        </section>
        <Card className="overflow-hidden p-2 xs:p-8">
          <Table columns={columns} data={tasks} />
        </Card>
      </main>
      <EditTaskDialog />
    </>
  )
}
