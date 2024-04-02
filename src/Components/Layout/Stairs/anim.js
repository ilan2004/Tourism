export const expand = {
    initial: {
        top: 0
    },
    enter: (i) => ({    
        top: "100vh",
        transition: {
            duration: 2,
            delay: 0.05 * i,
            ease: [0.5  , 0.8, 0.8, 2],
        },
        transitionEnd: { height: "0", top: "0" }
    }),
    exit: (i) => ({
        height: "100vh",
        transition: {
            duration: 2,
            delay: 1 * i,
            ease: [0.8, 0.8, 0.8, 2]
        }
    })
}
export const opacity = {
    initial: {
        opacity: 0.5
    },
    enter: {
        opacity: 0
    },
    exit: {
        opacity: 0.5,
        
    }
}