import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({ author, quote}) => {

  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({width:0,height:0})

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height, width});
  }, [quote])

  return (    
    <>
      <figure>
        <blockquote
          className="blockquote"
          style={{display: 'flex'}}
        >
          <p ref={pRef}>{quote}</p>
          <figcaption className="blockquote-footer">
            {author}
          </figcaption>
        </blockquote>
      </figure>
      <code>
        {
          JSON.stringify(boxSize)
        }
      </code>
    </>
            
  )
}
