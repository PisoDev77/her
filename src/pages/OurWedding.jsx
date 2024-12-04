import { useState, useEffect } from 'react';

export default function OurWedding() {
    const [currentPage, setCurrentPage] = useState('A');

    // 특정 작업을 수행하는 함수
    const doSomeTask = async () => {
        // 예: 데이터 로딩, 이미지 로딩 등
        return 'task completed';
    };

    // 지정된 시간만큼 대기하는 함수
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        const pageSequence = async () => {
            try {
                // A 페이지에서 특정 작업 수행
                const result = await doSomeTask();
                console.log(result);

                // 1초 대기
                await wait(1000);
                setCurrentPage('B');

                // B 페이지에서 다른 작업 수행
                const result2 = await doSomeTask();
                console.log(result2);

                // 2초 대기
                await wait(2000);
                setCurrentPage('default');
            } catch (error) {
                console.error('Page transition error:', error);
            }
        };

        pageSequence();
    }, []);

    const renderPage = () => {
        switch (currentPage) {
            case 'A':
                return <APage />;
            case 'B':
                return <BPage />;
            default:
                return <div>OurWedding</div>;
        }
    };

    return renderPage();
}

function APage() {
    return <div>APage</div>;
}

function BPage() {
    return <div>BPage</div>;
}
