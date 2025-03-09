import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Subtitle: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`subtitle ${displayClass ?? ""}`}>
      <div style={{ 
        color: 'var(--secondary)',
        marginBottom: '0.5rem',
        fontSize: '1.1rem',
        fontStyle: 'italic',
        fontWeight: '500',
        opacity: 0.9,
      }}>
        Days until The Concourse of Lords:
      </div>
      <div style={{
        color: 'var(--secondary)',
        fontSize: '3rem',
        fontWeight: '600',
        textAlign: 'center',
        opacity: 0.9,
      }}>
        379
      </div>
    </div>
  ) 
}

export default (() => Subtitle) satisfies QuartzComponentConstructor
