import React from 'react'

const Img = ({
    className,
    src = "src/assets/images/blogs/b5.jpg",
    alt = "testImg",
    ...restProps
  }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  )
}

export default Img