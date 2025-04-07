import { Button } from "@components/shadcn/Button";
import { FaceIcon, SunIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <>
      <div className="w-fit mx-auto mb-6">
        <h2 className="text-2xl text-center mb-4">Colors</h2>

        <div className="flex gap-6">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="tertiary">Tertiary</Button>
          <Button variant="error">Error</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
        </div>
      </div>

      <div className="w-fit mx-auto mb-6">
        <h2 className="text-2xl text-center mb-4">Disabled</h2>

        <div className="flex gap-6">
          <Button disabled variant="primary">
            Primary
          </Button>
          <Button disabled variant="secondary">
            Secondary
          </Button>
          <Button disabled variant="tertiary">
            Tertiary
          </Button>
          <Button disabled variant="error">
            Error
          </Button>
          <Button disabled variant="success">
            Success
          </Button>
          <Button disabled variant="warning">
            Warning
          </Button>
        </div>
      </div>

      <div className="w-fit mx-auto mb-6">
        <h2 className="text-2xl text-center mb-4">Sizes</h2>

        <div className="flex gap-6">
          <Button variant="primary" size="small">
            Small
          </Button>
          <Button variant="secondary" size="medium">
            Medium
          </Button>
          <Button variant="tertiary" size="large">
            Large
          </Button>
        </div>
      </div>

      <div className="w-fit mx-auto mb-6">
        <h2 className="text-2xl text-center mb-4">Icons</h2>

        <div className="flex gap-6">
          <Button leftIcon={<FaceIcon />} variant="primary">
            Left
          </Button>
          <Button rightIcon={<SunIcon />} variant="secondary">
            Right
          </Button>
          <Button
            leftIcon={<FaceIcon />}
            rightIcon={<SunIcon />}
            variant="tertiary"
          >
            Both
          </Button>
        </div>
      </div>

      <div className="w-fit mx-auto mb-6">
        <h2 className="text-2xl text-center mb-4">With Tooltip</h2>

        <div className="flex gap-6">
          <Button
            withTooltip
            tooltipPosition="top"
            tooltipContent="Top Tooltip"
            tooltipDelayDuration={100}
            variant="primary"
          >
            Top (100 ms delay)
          </Button>
          <Button
            withTooltip
            tooltipPosition="bottom"
            tooltipContent="Bottom Tooltip"
            tooltipDelayDuration={200}
            variant="secondary"
          >
            Bottom (200 ms delay)
          </Button>
          <Button
            withTooltip
            tooltipPosition="left"
            tooltipContent="Left Tooltip"
            tooltipDelayDuration={300}
            variant="tertiary"
          >
            Left (300 ms delay)
          </Button>
          <Button
            withTooltip
            tooltipPosition="right"
            tooltipContent="Right Tooltip"
            tooltipDelayDuration={400}
            variant="error"
          >
            Right (400 ms delay)
          </Button>
          <Button
            disabled
            withTooltip
            tooltipPosition="top"
            tooltipContent="Disabled Tooltip"
            tooltipDelayDuration={500}
            variant="success"
          >
            With tooltip, but disabled
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
