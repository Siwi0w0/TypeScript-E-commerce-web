import { Separator } from "@/components/ui/separator"

// SectionTitle.tsx
interface SectionTitleProps {
  text: string;
}

function SectionTitle({ text }: SectionTitleProps) {
  return (
    <div>
        <h2 className='text-3xl font-medium tracking-wider capitalize mb-8'>
            {text}
        </h2>
        <Separator />
    </div>
  )
}

export default SectionTitle