import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const Links: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`links ${displayClass ?? ""}`}>
      <div style={{ 
        display: 'flex',
        gap: '1rem',
        marginBottom: '0rem',  // reduced from 1rem
        marginTop: '0rem',     // added to control top spacing
        fontSize: '0.9rem',
        justifyContent: 'left',
      }}>
        <a href="https://www.owlbear.rodeo/room/0nnA6ZWtWWfc/TheManicCrush" 
           style={{ 
             color: 'var(--secondary)',
             textDecoration: 'underline'
           }}>Owlbear</a>
        <a href="https://www.dndbeyond.com/characters" 
           style={{ 
             color: 'var(--secondary)',
             textDecoration: 'underline'
           }}>DnDBeyond</a>
      </div>
    </div>
  )
}

export default (() => Links) satisfies QuartzComponentConstructor
