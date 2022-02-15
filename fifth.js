import React from 'react'
import './fifth.css'
import squiggleTop from '../Tynker-images/bg-squiggle-top.svg'


function Kids(){
    return(
       <>
        <div class="code-tynker">
            <div className='squiggleTopdiv'>
            <img class="squiggleTop" src={squiggleTop}></img>
            </div>
            <div class="Tdiv-text">
                <span className='tdiv-text-contain'>
                <h1>Why should kids learn to code with tynker?</h1> <br/>
                Because technology is so integrated into virtually every aspect of our lives, learning about it ismore
                important than ever. For kids, our coding platform makes it convenient and fun to gain knowledge
                that will serve them well throughout their lives. You can count on our trusted methods to help them
                develop and grow their capabilities with computers.
                
                Tynker isn't just for schools and coding camps, though. Parents who value STEM education and want
                their children to know how to learn to code should know that our kids programming platform can be
                used at home, too. There are individual and family home plans, and our online coding classes for kids
                are a great way for them to gain the supplemental STEM skills needed for the world of the future.
                </span>
            </div>
        </div>
        </>
    )
}

export default Kids