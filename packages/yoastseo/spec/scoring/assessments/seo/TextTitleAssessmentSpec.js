import TextTitleAssessment from "../../../../src/scoring/assessments/seo/TextTitleAssessment";

import { Paper }  from "../../../../src/values/index";


describe( "a test to check whether a text has a title or not", () => {
	const assessment = new TextTitleAssessment();

	it( "should return a good score if the text has a title", () => {
		const mockPaper = new Paper( "A text about a beautiful cat.", { textTitle: "A good title befitting a beautiful cat" } );

		expect( assessment.getResult( mockPaper ).score ).toEqual( 9 );
		expect( assessment.getResult( mockPaper ).text ).toEqual(
			"<a href='https://yoa.st/4nh' target='_blank'>Title</a>: Your page has a title. Well done!"
		);
	} );
	it( "should return a bad score if the text doesn't have a title", () => {
		const mockPaper = new Paper( "A text about a beautiful cat.", { textTitle: "" } );

		expect( assessment.getResult( mockPaper ).score ).toEqual( -10000 );
		expect( assessment.getResult( mockPaper ).text ).toEqual(
			"<a href='https://yoa.st/4nh' target='_blank'>Title</a>: Your page does not have a title yet. " +
			"<a href='https://yoa.st/4ni' target='_blank'>Add one</a>!"
		);
	} );
	it( "should still return a bad score if the text title only contains spaces", () => {
		let mockPaper = new Paper( "A text about a beautiful cat.", { textTitle: "   " } );

		expect( assessment.getResult( mockPaper ).score ).toEqual( -10000 );
		expect( assessment.getResult( mockPaper ).text ).toEqual(
			"<a href='https://yoa.st/4nh' target='_blank'>Title</a>: Your page does not have a title yet. " +
			"<a href='https://yoa.st/4ni' target='_blank'>Add one</a>!"
		);

		mockPaper = new Paper( "A text about a beautiful cat.", { textTitle: "&nbsp;   " } );

		expect( assessment.getResult( mockPaper ).score ).toEqual( -10000 );
		expect( assessment.getResult( mockPaper ).text ).toEqual(
			"<a href='https://yoa.st/4nh' target='_blank'>Title</a>: Your page does not have a title yet. " +
			"<a href='https://yoa.st/4ni' target='_blank'>Add one</a>!"
		);
	} );
} );

