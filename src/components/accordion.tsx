import React from 'react'

const accordion = () => {
  return (
    <section id="questions" className="p5">
            <div className="container">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <div className="accordion accordion-flush" id="questions">
                
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-1">
                                Where exactly are you located?
                            </button>
                        </h2>
                        <div id="question-1" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#questions">
                            <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum recusandae, culpa facere, ducimus vitae aliquid nihil quis aut minima
                                pariatur ipsam sed quibusdam placeat ipsa voluptas quae dolorem blanditiis inventore
                                corrupti incidunt accusamus facilis. Atque et accusamus aliquid quos hic ullam,
                                voluptates, ipsam itaque consequatur laborum molestiae ipsa, alias porro.
                            </div>
                        </div>
                    </div>
                
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-2">
                                How much does it cost to attend?
                            </button>
                        </h2>
                        <div id="question-2" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#questions">
                            <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum recusandae, culpa facere, ducimus vitae aliquid nihil quis aut minima
                                pariatur ipsam sed quibusdam placeat ipsa voluptas quae dolorem blanditiis inventore
                                corrupti incidunt accusamus facilis. Atque et accusamus aliquid quos hic ullam,
                                voluptates, ipsam itaque consequatur laborum molestiae ipsa, alias porro.
                            </div>
                        </div>
                    </div>
             
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-3">
                                What do I need to know?
                            </button>
                        </h2>
                        <div id="question-3" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#questions">
                            <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum recusandae, culpa facere, ducimus vitae aliquid nihil quis aut minima
                                pariatur ipsam sed quibusdam placeat ipsa voluptas quae dolorem blanditiis inventore
                                corrupti incidunt accusamus facilis. Atque et accusamus aliquid quos hic ullam,
                                voluptates, ipsam itaque consequatur laborum molestiae ipsa, alias porro.
                            </div>
                        </div>
                    </div>
                 
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-4">
                                How do I sign up?
                            </button>
                        </h2>
                        <div id="question-4" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#questions">
                            <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum recusandae, culpa facere, ducimus vitae aliquid nihil quis aut minima
                                pariatur ipsam sed quibusdam placeat ipsa voluptas quae dolorem blanditiis inventore
                                corrupti incidunt accusamus facilis. Atque et accusamus aliquid quos hic ullam,
                                voluptates, ipsam itaque consequatur laborum molestiae ipsa, alias porro.
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#question-5">
                                Will you help me get a job?
                            </button>
                        </h2>
                        <div id="question-5" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#questions">
                            <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum recusandae, culpa facere, ducimus vitae aliquid nihil quis aut minima
                                pariatur ipsam sed quibusdam placeat ipsa voluptas quae dolorem blanditiis inventore
                                corrupti incidunt accusamus facilis. Atque et accusamus aliquid quos hic ullam,
                                voluptates, ipsam itaque consequatur laborum molestiae ipsa, alias porro.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default accordion