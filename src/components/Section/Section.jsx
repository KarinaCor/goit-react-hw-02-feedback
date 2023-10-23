import * as SC from './Section.styled'

export const Section = ({title,children}) => {
    <>
 <SC.Title>{title}</SC.Title>
    {children}
    </>
   
}