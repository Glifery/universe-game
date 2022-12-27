type TestTextProps = {
    text: number
}

export const TestText = ({ text }: TestTextProps) =>
    <p>
        { text }
    </p>

export default TestText;
