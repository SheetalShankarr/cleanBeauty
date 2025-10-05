import React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";

import { analyzeIngredients } from './Utils/IngrediantsAnalyzer'
import '../src/Styles/home.css'

const Home = () => {
    const [ input, setInput ] = useState("")
    const [ result, setResult ] = useState(null)

    const handleCheck = () => {
        const result = analyzeIngredients(input)
        setResult(result)
    }

    const handleClear = () => {
        setInput("")
        setResult(null)
    }

  return (
    <Container className='home-space'>
        <div className='hero-text'>
            <Row><Col>Transparency</Col></Row>
            <Row><Col>Made</Col></Row>
            <Row><Col>Simple.</Col></Row>
        </div>
        <div className='application-brief-text'>
            <p>
                Many cosmetics and skincare products are marketed as “clean,” but it's not always clear what's inside.
                Look past the label, understand what's in your products and make more informed, confident choices.
            </p>
        </div> 
        <div className='ingredients-input-field'>
            <Row>
                <Col>
                    <textarea
                        className="input-text-box"
                        rows="8"
                        placeholder="Paste your ingredient list here, separated by commas"
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                    />
                </Col>
            </Row>
            <Row className='buttons-row'>
                <Col xs={8}>
                <button
                    className="check-ingredient-button"
                    onClick={handleCheck}
                    disabled={input.length === 0}
                >
                    Check Ingredients
                </button>
                </Col>
                <Col xs={4}>
                <button
                    className="clear-button"
                    onClick={handleClear}
                    disabled={input.length === 0}
                >
                    Clear
                </button>
                </Col>
            </Row>
        </div>
        <div className='output-field'>
        {result && (
              <div>
                {result.safe ? (
                    <div className="safe-text-field">
                        <p>
                            Safe! No harmful ingredients detected.
                        </p>
                    </div>
                ) : (
                  <div className="warning-text-field">
                    <p>
                        Warning! Ingredient(s) of concern detected:
                    </p>
                    {/* Maybe will add accordions for different types of harmful ingredients further */}
                    <p className='result-ingredients'>
                    {result.flagged.join(", ")}
                    </p>
                  </div>
                )}
              </div>
          )}
        </div>
    </Container>
  )
}

export default Home