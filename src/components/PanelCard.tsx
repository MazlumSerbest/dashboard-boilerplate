import { Card, CardBody } from "@nextui-org/card";

type Props = {
    content: React.ReactNode;
    header: string;
    icon?: React.ReactNode;
    color?: string;
};

export default function PanelCard(props: Props) {
    const { content, header, icon, color } = props;

    return (
        <Card className="border-b-4 border-indigo-400">
            <CardBody className="flex flex-row p-6 pt-4 items-center">
                {icon}
                <div className="flex flex-col flex-1 gap-2 items-center">
                    <h6 className="text-sm uppercase font-bold text-indigo-400">
                        {header}
                    </h6>
                    <div className="flex flex-1 items-center">{content}</div>
                </div>
            </CardBody>
        </Card>
    );
}
