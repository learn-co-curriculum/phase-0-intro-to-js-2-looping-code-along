const expect = chai.expect;

describe('index.js', () => {
	describe('printBadges()', () => {
		let spy;

		beforeEach(() => {
			spy = sinon.spy(console, 'log');
		});

		afterEach(() => {
			spy.restore();
		});

		it('invokes console.log() once for each element in the passed-in array', () => {
			printBadges(['Lisa', 'Kaitlin', 'Jan']);

			expect(spy.callCount).to.eq(3);
		});

		it('prints out a welcome badge for each employee', () => {
			printBadges(['Joe', 'Gabe']);

			expect(spy.calledWithExactly('Welcome Joe! You are employee #1.')).to.be
				.true;
			expect(spy.calledWithExactly('Welcome Gabe! You are employee #2.')).to.be
				.true;
		});

		it('returns the passed-in array', () => {
			const arr = [];

			expect(printBadges(arr)).to.eq(arr);
		});
	});

	describe('tailsNeverFails()', () => {
		let spy;

		beforeEach(() => {
			spy = sinon.stub(Math, 'random');
		});

		afterEach(() => {
			spy.restore();
		});

		it('invokes Math.random() to simulate coin flips', () => {
			spy.returns(0.2);

			tailsNeverFails();

			expect(spy.calledOnce).to.be.true;
		});

		it('returns the number of "Tails" flips in a row', () => {
			spy
				.onFirstCall()
				.returns(0.7)
				.onSecondCall()
				.returns(0.5)
				.onThirdCall()
				.returns(0.1);

			expect(tailsNeverFails()).to.eq('You got 2 tails in a row!');
		});

		it('loops indefinitely until a flip results in "Heads"', () => {
			spy
				.onCall(0)
				.returns(0.7)
				.onCall(1)
				.returns(0.6)
				.onCall(2)
				.returns(0.5)
				.onCall(3)
				.returns(0.9)
				.onCall(4)
				.returns(0.8)
				.onCall(5)
				.returns(0.5)
				.onCall(6)
				.returns(0.7)
				.onCall(7)
				.returns(0.6)
				.onCall(8)
				.returns(0.4);

			expect(tailsNeverFails()).to.eq('You got 8 tails in a row!');
		});
	});
});
